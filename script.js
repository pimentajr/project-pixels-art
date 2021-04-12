const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const purpleColor = document.getElementById('purple');

blackColor.addEventListener('click', selectedColor);
redColor.addEventListener('click', selectedColor);
blueColor.addEventListener('click', selectedColor);
purpleColor.addEventListener('click', selectedColor);

function selectedColor(param) {
  blackColor.className = 'color';
  redColor.className = 'color';
  blueColor.className = 'color';
  purpleColor.className = 'color';
  param.target.className = 'color selected';
}

// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// etapa 8 - Pintar os quadradinhos
const allBoard = document.querySelector('#pixel-board');
allBoard.addEventListener('click', colorPixel);

function colorPixel (event) {
 const selected = document.querySelector('.selected');
 const selectedColor = window.getComputedStyle(selected).getPropertyValue('background-color');
 event.target.style.backgroundColor = selectedColor;
}

// etapa 9 - criar botão

const clearButton = document.getElementById('clear-board');

function clearPixels () {
const pixels = document.querySelectorAll('.pixel');
for(let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = 'white';
}
}
clearButton.addEventListener('click', clearPixels);
