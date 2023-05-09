const myForm = document.getElementById("my-form");
let nameToSave = document.getElementById("name-field");
let saveButton = document.getElementById("save-button");
let deleteButton = document.getElementById("delete-button");
let outputMsg = document.getElementById("output-msg");

saveButton.addEventListener("click", function () {
  let savedName = nameToSave.value;
  myForm.onsubmit = function (e) {
    e.preventDefault();
  };

  if (savedName) {
    localStorage.setItem("nome salvato : ", savedName);

    outputMsg.innerHTML = "";
    let success = document.createElement("li");
    outputMsg.appendChild(
      success
    ).innerText = `Il nome ${savedName} è stato salvato con successo`;
    nameToSave.value = "";
  } else {
    outputMsg.innerHTML = "";
    let success = document.createElement("li");
    outputMsg.appendChild(success).innerText = `Non hai inserito alcun nome.`;
  }
});

deleteButton.addEventListener("click", function (e) {
  e.preventDefault();
  let prevSavedName = localStorage.getItem("nome salvato : ");

  if (prevSavedName) {
    localStorage.removeItem("nome salvato : ");
    outputMsg.innerHTML = "";
    let deleted = document.createElement("li");
    outputMsg.appendChild(deleted).innerText = `Nome cancellato`;
  } else {
    outputMsg.innerHTML = "";
    let deleted = document.createElement("li");
    outputMsg.appendChild(
      deleted
    ).innerText = `Non c'è più niente da cancellare`;
  }
});
