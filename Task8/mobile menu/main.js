let header = document.querySelector("header");

window.onscroll = function () {
  showBtnFunction();
  headerFunction();
};

const headerFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    header.classList.add("topArea");
  } else {
    header.classList.remove("bg");
    header.classList.add("topArea");
  }
};

let toTopBtn = document.querySelector("#toTopBtn");
const showBtnFunction = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

let toTopFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// Instead of onclick in html you could use toTopButn.
// addEventListener("click", toTopFunction);

let menuBtn = document.getElementById("menuBtn");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

const showMenuFunction = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showMenuFunction);
  }
  nav.classList.toggle("responsive");
};

menuBtn.addEventListener("click", showMenuFunction);

//---------------------------------------------------------------------

//Let's count to that baby!;

let babyDue = new Date(2021, 2, 2, 12);
let babyDueDate = new Date(2021, 2, 2, 12).getTime();

let interval = setInterval(function () {
  let now = new Date();
  let currentTime = new Date().getTime();

  let difference = babyDueDate - currentTime;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days +
    " days, " +
    hours +
    " hours, " +
    minutes +
    " minutes and " +
    seconds +
    " seconds until the birth of my daughter. That includes " +
    (days - Math.floor(days / 7) * 2 + " weekdays.");
  document.getElementById("dueDate").innerHTML = babyDue;
  document.getElementById("currentTime").innerHTML = now;
});

//Let's get countdown to users input:

let inputBtn = document
  .getElementById("input")
  .addEventListener("click", () => {
    let inputDate = document.getElementById("userDate").value;
    console.log(inputDate);
    let userDate = new Date(inputDate).getTime();
    let eventName = document.getElementById("eventName").value;
    console.log(userDate); //checking everything work so far
    console.log(eventName);

    let interval2 = setInterval(function () {
      //making a new interval for user input countdown
      let currentTime = new Date().getTime();

      let difference = userDate - currentTime;

      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("countdown2").innerHTML =
        days +
        " days, " +
        hours +
        " hours, " +
        minutes +
        " minutes and " +
        seconds +
        " seconds until " +
        eventName +
        ". That includes " +
        (days - Math.floor(days / 7) * 2 + " weekdays.");
    });
    let reset = document //making functionality to clear countdown to make a new one without refreshing
      .getElementById("clear")
      .addEventListener("click", () => {
        document.getElementById("myForm").reset();
        clearInterval(interval2);
        document.getElementById("countdown2").innerHTML = "";
      });
  });
