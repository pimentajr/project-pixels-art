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
  var selectedColor = document.querySelector('.selected');
  var theCSSprop = window.getComputedStyle(selectedColor).getPropertyValue('background-color');event.target.style.backgroundColor = theCSSprop;
}

pixelBoard.addEventListener('click', printColor);
