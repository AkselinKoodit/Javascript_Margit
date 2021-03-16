let form = document.querySelector("form");

let color1 = document.querySelector("#c1");
let color2 = document.querySelector("#c2");
let text = document.querySelector("p");

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = (event) => {
  let selectedValue;

  for (const v of direction) {
    event.preventDefault();
    if (v.checked) {
      selectedValue = v.value;
    }
  }

  console.log("is it working?");
  console.log("Color 1 is " + color1.value);
  console.log("Color 2 is " + color2.value);
  console.log(direction);
  console.log(selectedValue);

  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  text.textContent = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value});`;
};

form.addEventListener("submit", setGradient);
