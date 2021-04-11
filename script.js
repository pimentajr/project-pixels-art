const paletteColors = document.querySelectorAll('.color');
const colors = ['black', 'red', 'green', 'blue'];
const buttonGenerateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const valueInput = document.getElementById('board-size');

paletteColors[0].className += ' selected';

for (let indexPalette = 0; indexPalette < paletteColors.length; indexPalette += 1) {
  paletteColors[indexPalette].style.backgroundColor = colors[indexPalette];
}

function clearBoard() {
  pixelBoard.innerHTML = '';
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function selectColor() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', () => {
      removeSelected();
      paletteColors[index].className = 'color selected';
    });
  }
}

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let indexPixel = 0; indexPixel < pixels.length; indexPixel += 1) {
    pixels[indexPixel].addEventListener('click', () => {
      const backColor = document.querySelector('.selected').style.backgroundColor;
      pixels[indexPixel].style.backgroundColor = backColor;
    });
  }
}

function clear() {
  const buttonClear = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');
  buttonClear.addEventListener('click', () => {
    for (let indexClear = 0; indexClear < pixels.length; indexClear += 1) {
      pixels[indexClear].style.backgroundColor = 'white';
    }
  });
}

function createPixels(inputValue) {
  clearBoard();
  for (let index = 0; index < inputValue; index += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let indexx = 0; indexx < inputValue; indexx += 1) {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.className = 'pixel';
    }
  }
  selectColor();
  paintPixel();
  clear();
}

function checkInput() {
  if (valueInput.value === '') {
    alert('Board inválido!');
  } else if (valueInput.value < 5) {
    valueInput.value = 5;
  } else if (valueInput.value > 50) {
    valueInput.value = 50;
  }
  createPixels(valueInput.value);
}

buttonGenerateBoard.addEventListener('click', checkInput);

function randomColors() {
  for (let indexColors = 1; indexColors < paletteColors.length; indexColors += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    paletteColors[indexColors].style.backgroundColor = rgb;
  }
}

selectColor();
paintPixel();
clear();
randomColors();
