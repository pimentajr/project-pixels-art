const pixelBoards = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
const currentColor = document.getElementsByClassName('selected');
const colorPalette = document.querySelectorAll('#color-palette>button');
const btnSize = document.getElementById('generate-board');
const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const greenColor = document.getElementById('green');

// https://www.codecademy.com/forum_questions/525e864c80ff338580001a53
let safeColors = ['00','33','66','99','cc','ff'];
let rand = function() {
  return Math.floor(Math.random()*6);
};

let randomColor = function() {
  let r = safeColors[rand()];
  let g = safeColors[rand()];
  let b = safeColors[rand()];
  return "#"+r+g+b;
};

// https://www.w3schools.com/howto/howto_js_active_element.asp
function selectedColor() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].className = 'color';
    colorPalette[i].addEventListener('click', function() {
      currentColor[0].className = currentColor[0].className.replace('selected', '');
      this.className = 'selected color';
    });
  }
}

function makeDivs() {
  for (let i = 1; i <= 25; i += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    pixelBoards.appendChild(pixelDiv);
  }
}

function colorPixel(event) {
  const selects = document.querySelector('.selected');
  const pixeLol = event.target;
  const selectColor = window.getComputedStyle(selects).getPropertyValue('background-color');
  pixeLol.style.backgroundColor = selectColor;
}

pixelBoards.addEventListener('click', colorPixel);

function clearPixel() {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearPixel.length; i += 1) {
    clearPixel[i].style.backgroundColor = 'white';
  }
}

btnClear.addEventListener('click', clearPixel);

function boardsValue () {
  const boardSize = document.getElementById('board-size').value;
  if (boardSize > 50 || boardSize < 5) {
    alert('Board inválido!');
  }
}

blackColor.style.backgroundColor = 'black';
redColor.style.backgroundColor = randomColor();
blueColor.style.backgroundColor = randomColor();
greenColor.style.backgroundColor = randomColor();

boardsValue();
selectedColor();
makeDivs();

const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.className = 'selected color';

