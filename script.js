const listOfColors = ['black', 'lightsalmon', 'lightskyblue', 'khaki'];
const colorsPalette = document.getElementById('color-palette');
const linePixelBoard = document.querySelectorAll('.line');
const basePixelBoard = 5;
const pixelBoard = document.getElementById('pixel-board');
// const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');

document.getElementById('title').innerText = 'Paleta de Cores';

// Cria paleta de cores
function createPalette(arrayColors) {
  for (let index = 0; index < arrayColors.length; index += 1) {
    const box = document.createElement('div');
    box.className = 'color';
    box.style.background = listOfColors[index];
    colorsPalette.appendChild(box);
  }
}

// Preenche as linhas com as caixas vazias
function fillLinePixelBoard(divline) {
  for (let index = 0; index < basePixelBoard; index += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    box.style.width = '40px';
    box.style.height = '40px';
    box.style.background = 'white';
    divline.style.width = '210px';
    divline.style.height = box.style.height;
    pixelBoard.style.width = divline.style.width;
    divline.appendChild(box);
  }
}

// Passa por todas as linhas
function createPixelBoard(lines) {
  for (let index = 0; index < lines.length; index += 1) {
    fillLinePixelBoard(lines[index]);
  }
}

createPalette(listOfColors);
createPixelBoard(linePixelBoard);

let clickedColor = 'black';

function getColor(colorX) {
  clickedColor = colorX.target.style.background;
 }

function colorPixel(pixelX) {
  pixelX.target.style.background = clickedColor;
}

colorsPalette.addEventListener('click', getColor);

pixelBoard.addEventListener('click', colorPixel);