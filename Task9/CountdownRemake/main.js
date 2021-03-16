let form = document.querySelector("form");
let output = document.getElementById("outcome");
let countdown = document.getElementById("timer");

let alldays = [];
let businessdays = [];
let countdowntimer;

const daysLeft = (event) => {
  event.preventDefault();

  let startDate = new Date(document.getElementById("start").value);
  let endDate = new Date(document.getElementById("end").value);
  let eventName = document.getElementById("eventName").value;

  while (startDate < endDate) {
    startDate.setDate(startDate.getDate() + 1);
    alldays.push(startDate);
    if (startDate.getDay() !== 6 && startDate.getDay !== 0) {
      businessdays.push(startDate);
    }
  }

  output.textContent = `There's ${alldays.length} days and ${businessdays.length} until ${eventName}.`;

  form.reset();
  alldays = [];
  businessdays = [];

  timer(endDate, eventName);
};

const timer = (end, eventName) => {
  let countdownTimer = document.getElementById("timer");
  if (countdowntimer) {
    clearInterval(countdowntimer);
  }

  countdowntimer = setInterval(function () {
    let now = new Date();
    let between = end.getTime() - now;
    let days = Math.floor(between / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((between % (1000 * 60)) / 1000);

    countdownTimer.textContent = `From today to ${eventName}: ${days} days, ${hours} hours, ${minutes} and ${seconds} seconds`;
  }, 1000);
};

form.addEventListener("submit", daysLeft);
