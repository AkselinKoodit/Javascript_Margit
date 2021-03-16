let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.getElementById("score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("endScore");
let score = 0;
let close = document.getElementById("close");
let active = 0;
let speed = 1400;
let misses = 0;

let clickSound;
let mistakeSound;
let opener;
let theme = new sound("guerrillaRadio.mp3"); //Music from https://downloads.khinsider.com/ Rage Against the Machine - Guerrilla Radio

//Creating sound object:
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function playTheme() {
  // theme = new sound("guerrillaRadio.mp3");
  theme.play();
}
function pauseTheme() {
  theme.pause();
}

document.getElementById("stop").classList.add("invisible");

document.getElementById("scoreboard").classList.add("hidden");

buttons[0].onclick = function () {
  clicked(0);
};
buttons[1].onclick = function () {
  clicked(1);
};
buttons[2].onclick = function () {
  clicked(2);
};
buttons[3].onclick = function () {
  clicked(3);
};

const clicked = (i) => {
  console.log("clicked:", i);
  if (i === active) {
    //getting the click sound:
    clickSound.play();
    score++;
    scoredisplay.textContent = score;
    speed *= 0.95;
    misses = 0;
    buttons[active].classList.remove("active");
  } else {
    mistakeSound.play();
    console.log("Missed!");
    endGame();
  }
};

const startGame = () => {
  //Let's bring the scorebaord on display:
  document.getElementById("scoreboard").classList.remove("hidden");

  console.log("Misses: " + misses);
  //changing the visible button:
  document.getElementById("start").classList.add("invisible");

  document.getElementById("stop").classList.remove("invisible");

  //making circles clickable:
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("clickMe");
  }

  //constructing sound:
  clickSound = new sound("ballBlib.wav");
  mistakeSound = new sound("mistake.wav");

  console.log("game started");
  // openingSound.play();
  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  console.log("Current active: " + active);

  timer = setTimeout(startGame, speed);

  function pickNew(active) {
    let nextActive = getRandom(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
  misses++;
  console.log("Misses: " + misses);
  if (misses === 3) {
    endGame();
  }
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const endGame = () => {
  theme.stop();
  clearTimeout(timer);
  console.log("game over! Your score is " + score);
  overlay.style.visibility = "visible";
  if (score < 5) {
    gameover.textContent = "Pathetic! Your score: " + score;
  } else if (score < 10) {
    gameover.textContent = "Your score: " + score + " You can do better.";
  } else if (score < 15) {
    gameover.textContent = "Your score: " + score + ", not bad at all!";
  } else if (score < 20) {
    gameover.textContent = "Awesome! You got " + score + " points!";
  } else {
    gameover.textContent =
      "You must be the chosen one! You got " + score + " points!!!";
  }
};

// close.addEventListener("click", reloadGame);
const reloadGame = () => {
  console.log("reload happened");
  window.location.reload();
};
