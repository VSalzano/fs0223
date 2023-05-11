const deleteCard = (btn) => btn.closest(".col").remove();
const authorizationKey =
  "K5hJOQLEdyxceDnJHF5tWqJI5aGnKExctqvrnnAOnP9O4JH9PTbmSSO6";

let loadBtn = document.getElementById("load-btn");
let loadSecBtn = document.getElementById("secondary-load-btn");
let searchForm = document.getElementById("sarch-form");

let searchBtn = document.getElementById("search-btn");
let mainRow = document.getElementById("main-row");

loadBtn.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=kittens", {
    headers: {
      Authorization: authorizationKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((data) => {
      let photos = data.photos.slice(0, 9);
      console.log(photos);
      mainRow.innerHTML = "";
      photos.forEach((photo) => {
        let col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
        <div class="col">
        <div class="card mb-4 shadow-sm">
          <img src="${photo.src.portrait}" class="card-img-top">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" onclick="deleteCard(this)"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
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
});

loadSecBtn.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
      Authorization: authorizationKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((data) => {
      let photos = data.photos.slice(0, 9);
      console.log(photos);
      mainRow.innerHTML = "";
      photos.forEach((photo) => {
        let col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
        <div class="col">
        <div class="card mb-4 shadow-sm">
          <img src="${photo.src.portrait}" class="card-img-top">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" onclick="deleteCard(this)"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
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
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let searchField = document.getElementById("search-field");

  fetch(`https://api.pexels.com/v1/search?query=${searchField.value}`, {
    headers: {
      Authorization: authorizationKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((data) => {
      let photos = data.photos.slice(0, 9);
      console.log(photos);
      mainRow.innerHTML = "";
      photos.forEach((photo) => {
        let col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
        <div class="col">
        <div class="card mb-4 shadow-sm">
          <img src="${photo.src.portrait}" class="card-img-top">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" onclick="deleteCard(this)"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
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
});
