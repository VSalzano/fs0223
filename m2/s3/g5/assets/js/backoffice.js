const PRODUCTS_API = "https://striveschool-api.herokuapp.com/api/product/";
const KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiZjg4Zjc0MDAwMTQyODc0MzIiLCJpYXQiOjE2ODM4NzQ3NTEsImV4cCI6MTY4NTA4NDM1MX0.gGsJyhNprLS6KeiAFMHvqAaR6SW9aAfB-8y68ik9mY4";

let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get("productId");

// modalità modifica
if (productId) {
  document.getElementsByTagName("h2")[0].innerText = "Modifica prodotto";
  document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";
  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");
  deleteButton.addEventListener("click", () => {
    fetch(PRODUCTS_API + productId, {
      method: "DELETE",
      headers: {
        Authorization: KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("eliminazione completata con successo");
          location.assign("./index.html");
        } else {
          throw new Error("Problema nell'eliminazione del prodotto");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // get singolo prodotto
  fetch(PRODUCTS_API + productId, {
    headers: {
      Authorization: KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto");
      }
    })
    .then((product) => {
      console.log("Singolo prodotto tramite get specifica", product);
      document.getElementById("product-name").value = product.name;
      document.getElementById("product-description").value =
        product.description;
      document.getElementById("product-brand").value = product.brand;
      document.getElementById("product-img").value = product.imageUrl;
      document.getElementById("product-price").value = product.price;
    })
    .catch((error) => {
      console.log(error);
    });
}

//Definisco l'oggetto secondo la struttura data dall'API e porto i values dei miei input nelle proprietà

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInput = document.getElementById("product-name");
  let descriptionInput = document.getElementById("product-description");
  let brandInput = document.getElementById("product-brand");
  let imgInput = document.getElementById("product-img");
  let priceInput = document.getElementById("product-price");

  let newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imgInput.value,
    price: priceInput.value,
  };

  console.log(newProduct);

  // Se c'è l'Id faccio PUT, altrimenti faccio POST

  fetch(productId ? PRODUCTS_API + productId : PRODUCTS_API, {
    method: productId ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization: KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert(productId ? "Prodotto modificato!" : "Nuovo prodotto inserito");
        location.assign("/index.html");
      } else {
        alert("Errore nel salvataggio");
        throw new Error("Errore nel salvataggio");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
