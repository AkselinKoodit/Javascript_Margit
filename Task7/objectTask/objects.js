// let text = document.querySelector("p");

// let car = {
//   mark: "Volvo",
//   year: 2020,
//   owner: "Urho Kekkonen",
//   city: "Kuopio",
//   calcAge: function () {
//     //This is a method because function inside object
//     this.age = 2021 - this.year;
//     return this.age;
//   },
// };
// console.log(car);
// console.log(car.owner);
// console.log(car.year);
// car.color = "green";
// console.log(car);
// car.color = "white";
// console.log(car);
// delete car.city;
// console.log(car);
// console.log(car.owner, car.year);

// text.textContent = `Your car is ${
//   car.color
// } color and it's ${car.calcAge()} years old`;

// function Animals(name, sound, age, eye) {
//   this.name = name;
//   this.sound = sound;
//   this.age = age;
//   this.eye = eye;
// }

// let cat = new Animals("Herra Hakkarainen", "meow", 5, "green");
// let dog = new Animals("Rekku", "woof!", 10, "brown");
// console.log(cat);
// console.log(dog.name);

// let objectArray = [];
// console.table(dog); // :O Awesome!

function Car(licence, maker, model, price, color) {
  this.licence = licence;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.color = color;
}

let cars = [];

let aksun = new Car("123", "BMW", "convertible", 10000, "black");
let lauran = new Car("343faa", "Lada", "classic", 500, "Lada");

cars.push(aksun);
cars.push(lauran);

let text = document.querySelector("p");

let submit = document.getElementById("#submit");

// let car = new Car(licence, maker, model, price, color);

document.getElementById("submit").addEventListener("click", () => {
  let car = new Car();
  car.licence = document.getElementById("licence").value;
  car.maker = document.getElementById("maker").value;
  car.model = document.getElementById("model").value;
  car.price = Number(document.getElementById("price").value);
  car.color = document.getElementById("color").value;

  cars.push(car);

  console.table(cars);
});
// let n = 0;
// while (n < cars.length) {
//   text.textContent = cars[n];
// }

document.getElementById("searchInput").addEventListener("click", () => {
  let userInput = document.getElementById("licence").value;

  let message = "Didn't find anything with that licence plate";
  let i = 0;
  while (i < cars.length) {
    if (cars[i].licence == userInput) {
      message =
        "Found it! The car maker is " +
        cars[i].maker +
        " and the model is " +
        cars[i].model;
    }
    i++;
  }
  console.log(message);
  text.textContent = message;
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("form").reset();
});
