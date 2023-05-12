const PRODUCTS_API = "https://striveschool-api.herokuapp.com/api/product/";
const KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiZjg4Zjc0MDAwMTQyODc0MzIiLCJpYXQiOjE2ODM4NzQ3NTEsImV4cCI6MTY4NTA4NDM1MX0.gGsJyhNprLS6KeiAFMHvqAaR6SW9aAfB-8y68ik9mY4";

let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get("productId");
let mainRow = document.getElementById("main-row");

fetch(PRODUCTS_API + productId, {
  headers: {
    Authorization: KEY,
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore  nel caricamento del prodotto");
    }
  })
  .then((singleProduct) => {
    console.log(singleProduct);
    let col = document.createElement("div");
    col.classList.add("col-12");
    col.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${singleProduct.imageUrl}" class="w-100 rounded-start" alt="...">
            </div>
        <div class="col-md-8">
            <div class="card-body ms-5">
                <h2 class="card-title mb-4">${singleProduct.name}</h2>
                    <p class="card-text fs-3">Genere : ${singleProduct.description}</p>
                    <p class="card-text fs-3">Software House : ${singleProduct.brand}</p>
                    <p class="card-text fs-3">Prezzo : € ${singleProduct.price}</p>
                    <p class="card-text"><small class="text-body-secondary">${singleProduct._id}</small></p>
                </div>
            </div>
        </div>
    </div>
    `;
    mainRow.appendChild(col);
  })
  .catch((err) => {
    console.log(err);
  });
