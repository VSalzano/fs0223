// ESERCIZIO 1 ------------

// const User = function (firstName, lastName, age, location) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.location = location;
//   this.ageComparison = function (y) {
//     if (this.age > y.age) {
//       console.log(`${this.firstName} è più vecchio di ${y.firstName}`);
//     } else if (this.age < y.age) {
//       console.log(`${y.firstName} è più vecchio di ${this.firstName}`);
//     } else {
//       console.log(`${this.firstName} e ${y.firstName} hanno la stessa età`);
//     }
//   };
// };

// let mario = new User("Mario", "Rossi", 25, "Italy");
// let john = new User("John", "Doe", 39, "USA");
// let luca = new User("Luca", "Verdi", 21, "Italy");
// let andrea = new User("Andrea", "Neri", 93, "Italy");

// mario.ageComparison(john);
// luca.ageComparison(andrea);
// andrea.ageComparison(mario);

// Lo rifaccio con sintassi richiesta dalla traccia

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static ageComparison(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più vecchio di ${user2.firstName}`);
    } else if (user1.age < user2.age) {
      console.log(`${user2.firstName} è più vecchio di ${user1.firstName}`);
    } else {
      console.log(`${user1.firstName} e ${user2.firstName} sono coetanei`);
    }
  }
}

let mario = new User("Mario", "Rossi", 25, "Italy");
let john = new User("John", "Doe", 39, "USA");
let luca = new User("Luca", "Verdi", 21, "Italy");
let andrea = new User("Andrea", "Neri", 93, "Italy");

User.ageComparison(mario, john);
User.ageComparison(luca, andrea);

// ESERCIZIO 2 --------------

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static ownerComparison = function (pet1, pet2) {
    if (x.ownerName == y.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

let myForm = document.querySelector("form");
let pName = document.getElementById("pet-name");
let oName = document.getElementById("owner-name");
let pSpecie = document.getElementById("pet-species");
let pBreed = document.getElementById("pet-breed");

let petsArr = [];

const createList = function () {
  let myList = document.querySelector("#my-list");
  myList.innerText = "";

  petsArr.forEach((pet) => {
    let newListItem = document.createElement("li");
    newListItem.innerText = `${pet.petName} è un ${pet.species} di razza ${pet.breed}. Il suo padrone è ${pet.ownerName}`;
    myList.appendChild(newListItem);
  });
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newPet = new Pet(pName.value, oName.value, pSpecie.value, pBreed.value);

  petsArr.push(newPet);

  pName.value = "";
  oName.value = "";
  pSpecie.value = "";
  pBreed.value = "";

  createList();
});
