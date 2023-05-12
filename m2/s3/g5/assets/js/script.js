const PRODUCTS_API = "https://striveschool-api.herokuapp.com/api/product/";
const KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiZjg4Zjc0MDAwMTQyODc0MzIiLCJpYXQiOjE2ODM4NzQ3NTEsImV4cCI6MTY4NTA4NDM1MX0.gGsJyhNprLS6KeiAFMHvqAaR6SW9aAfB-8y68ik9mY4";

let mainRow = document.getElementById("main-row");

fetch(PRODUCTS_API, {
  headers: {
    Authorization: KEY,
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error contacting server ");
    }
  })
  .then((products) => {
    console.log(products);
    products.forEach((product) => {
      let col = document.createElement("div");
      col.classList.add("col-6", "col-lg-3", "g-4", "d-flex");
      col.innerHTML = `
      <div class="card" style="">
        <img src="${product.imageUrl}" class="card-img-top w-100 h-100 p-0" alt="...">
        <div class="card-body">
          <h5 class="card-title"><a href="./detail.html?productId=${product._id}">${product.name}</a></h5>
          <p class="card-text">€ ${product.price}</p>
          <a href="../backoffice.html?productId=${product._id}" class="btn btn-primary">Modifica</a>
        </div>
      </div>
      `;

      mainRow.appendChild(col);
    });
  })
  .catch((err) => {
    console.log(err);
  });
