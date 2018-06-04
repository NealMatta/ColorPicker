
// Variables used
var squares = document.getElementsByClassName("square");
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var pcDisplay = document.getElementById("PickedColorDisplay");
var restart = document.getElementById("restart");
var easyBTN = document.querySelector("#easy");
var hardBTN = document.querySelector("#hard");

startGame();

function startGame() {
  // Setting the correct Color
  pcDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    // Add all colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add Event Listeners to each squares
    squares[i].addEventListener("click", function() {
      if (this.style.backgroundColor === pickedColor) {
        messageDisplay.textContent = "Correct"
        changeColors(pickedColor);
        restart.textContent = "Play Again?"
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

// Change colors of the non-correct squares
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  document.getElementsByClassName("header")[0].style.backgroundColor = color;
}

// Pick color to guess
function pickColor() {
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

// Generate the list of random colors
function generateRandomColors(numColors) {
  var arr = []
  for (var i = 0; i < numColors; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// Create a random color
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")"
  return color;
}


// When Easy button is clicked
easyBTN.addEventListener("click", function() {
  easyBTN.classList.add("selected");
  hardBTN.classList.remove("selected");

  colors = generateRandomColors(3);
  pickedColor = pickColor();
  pcDisplay.textContent = pickedColor;

  // Iterate through all 6 but set last 3 to be hidden
  for (var i = 0; i < 6; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].classList.add("hide");
    }
  }
  document.getElementsByClassName("header")[0].style.backgroundColor = "#5285B2";
});

// When hard button is clicked
hardBTN.addEventListener("click", function() {
  easyBTN.classList.remove("selected");
  hardBTN.classList.add("selected");

  colors = generateRandomColors(6);
  pickedColor = pickColor();
  pcDisplay.textContent = pickedColor;

  // Remove hidden from last 3
  for (var i = 0; i < 6; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].classList.remove("hide")
  }
  document.getElementsByClassName("header")[0].style.backgroundColor = "#5285B2";
});

// Setting up the restart button
restart.addEventListener("click", function() {
  restart.textContent = "New Colors"
  colors = generateRandomColors(colors.length);
  pickedColor = pickColor();
  pcDisplay.textContent = pickedColor;
  console.log(squares);
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  document.getElementsByClassName("header")[0].style.backgroundColor = "#5285B2";
  messageDisplay.textContent = "";
});
