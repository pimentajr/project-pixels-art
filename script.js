const containerBoard = document.getElementById('pixel-board');

function createBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const tableRow = document.createElement('div');
    containerBoard.appendChild(tableRow);
    for (let i = 0; i < size; i += 1) {
      const addedPixel = document.createElement('div');
      tableRow.appendChild(addedPixel);
      addedPixel.className = 'pixel';
    }
  }
}
createBoard(5);

function inputClass() {
  const element = document.getElementById('black');
  element.classList.add('selected');
}

window.onload = inputClass;

const color1 = document.getElementById('black');
const color2 = document.getElementById('red');
const color3 = document.getElementById('blue');
const color4 = document.getElementById('green');

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'red';
color3.style.backgroundColor = 'blue';
color4.style.backgroundColor = 'green';

function caughtedColor(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', caughtedColor);
color2.addEventListener('click', caughtedColor);
color3.addEventListener('click', caughtedColor);
color4.addEventListener('click', caughtedColor);

function addPixelColor() {
  containerBoard.addEventListener('click', (event) => {
    const pixel = event.target;
    const selectedColor = document.querySelector('.selected');
    if (pixel.className === 'pixel') {
      pixel.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
}
addPixelColor();

function clearPixel() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    const px = document.querySelectorAll('.pixel');
    for (let i = 0; i < px.length; i += 1) {
      px[i].style.backgroundColor = 'white';
    }
  });
}
clearPixel();

const inputTab = document.getElementById('board-size');
const inputValue = inputTab.value;
const buttonVQV = document.getElementById('generate-board');

function createInputBoard() {
  containerBoard.innerHTML = '';
  for (let index = 0; index < inputValue; index += 1) {
    const tableRow = document.createElement('div');
    containerBoard.appendChild(tableRow);
    for (let i = 0; i < inputValue; i += 1) {
      const addedPixel = document.createElement('div');
      tableRow.appendChild(addedPixel);
      addedPixel.className = 'pixel';
    }
  }
}
buttonVQV.addEventListener('click', createInputBoard);

buttonVQV.addEventListener('click', () => {
  let inputNumber = inputTab.value;
  if (inputNumber === '') {
    alert('Board inválido!');
  } if (inputNumber < 5) {
    inputNumber = 5;
  } else if (inputNumber > 50) {
    inputNumber = 50;
  }
  containerBoard.innerHTML = '';
  createBoard(inputNumber);
});

function colorGenerator() {
  const colorRed = (Math.ceil(Math.random() * 255));
  const colorGreen = (Math.ceil(Math.random() * 255));
  const colorBlue = (Math.ceil(Math.random() * 255));

  return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}

color2.style.backgroundColor = colorGenerator();
color3.style.backgroundColor = colorGenerator();
color4.style.backgroundColor = colorGenerator();
