const listOfColors = ['black', 'lightsalmon', 'lightskyblue', 'khaki'];
const colorsPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board')
const linePixelBoard = document.querySelectorAll('.line')
const basePixelBoard = 5;

document.getElementById('title').innerText = 'Paleta de cores';

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
    box.style.background = 'white'
    divline.appendChild(box)
  }
}

// Passa por todas as linhas 
function createPixelBoard(lines) {
  let columns = lines;
  for (let index = 0; index < lines.length; index += 1) {
    fillLinePixelBoard(lines[index]);
  }
}

createPalette(listOfColors);
createPixelBoard(linePixelBoard);
