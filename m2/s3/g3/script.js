fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nel contattare il server");
    }
  })
  .then((books) => {
    console.log(books);

    let mainRow = document.getElementById("main-row");
    books.forEach((book) => {
      let col = document.createElement("div");
      col.classList.add("col-12", "col-md-6", "col-lg-3", "g-4");
      col.innerHTML = `
        <div class="card p-0" style="height: 40rem">
            <img src="${book.img}" class="card-img-top "  style="height: 30rem" />
            <div class="card-body">
                <h5 class="card-title" id="title">${book.title}</h5>
                <p class="card-text">Price : $ ${book.price}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-success">Acquista</button>
                    <button class="btn btn-danger" onclick="destroyCard(${book.asin})   ">Scarta</button>
                </div>
            </div>
        </div>

        `;

      mainRow.appendChild(col);
    });
  })

  .catch((err) => {
    console.log(err);
  });
