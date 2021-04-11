const black = document.getElementById('black');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

function selectColor(param) {
  black.className = 'color';
  yellow.className = 'color';
  red.className = 'color';
  blue.className = 'color';
  param.target.className = 'color selected';
}

black.addEventListener('click', selectColor);
yellow.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);

const pixelBoard = document.getElementById('pixel-board');

// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
function printColor(event) {
  const selectedColor = document.querySelector('.selected');
  const theCSSprop = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  event.target.style.backgroundColor = theCSSprop;
}

pixelBoard.addEventListener('click', printColor);

// BUTTON -CLEAR

const button = document.getElementById('clear-board');

function clearAllPixels() {
  const board = document.querySelector('#pixel-board');
  const clearPixel = document.getElementsByClassName('pixel');
  board.style.backgroundColor = 'white';
  for (let index = 0; index < clearPixel.length; index += 1) {
    clearPixel[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearAllPixels);
