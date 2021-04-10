const listOfColors = ['black', 'lightsalmon', 'lightskyblue', 'khaki'];
const colorsPalette = document.querySelector('#color-palette');
const linePixelBoard = document.querySelectorAll('.line');
const basePixelBoard = 5;
const pixelBoard = document.getElementById('pixel-board');
const color = document.getElementsByClassName('color')
const pixel = document.getElementsByClassName('pixel')

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

let clickedColor = 'black'

color[0].addEventListener('click', function() {
  clickedColor = color[0].style.background;
})

color[1].addEventListener('click', function() {
  clickedColor = color[1].style.background;
})

pixel[0].addEventListener('click', function() {
  pixel[0].style.background = clickedColor;
})

pixel[1].addEventListener('click', function() {
  pixel[1].style.background = clickedColor;
})
