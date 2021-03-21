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
        cars[i].model +
        ". Discounted price is " +
        countDiscount(cars[i]);
    }
    i++;
  }
  console.log(message);
  text.textContent = message;
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("form").reset();
});
function countDiscount(car) {
  if (car.price > 20000) {
    return car.price * 0.75;
  } else if (car.price < 5000) {
    return car.price * 0.9;
  } else {
    return car.price * 0.85;
  }
}
