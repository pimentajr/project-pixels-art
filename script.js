const listOfColors = ['black', 'lightsalmon', 'lightskyblue', 'khaki'];
const colorsPalette = document.getElementById('color-palette');
const linePixelBoard = document.querySelectorAll('.line');
const basePixelBoard = 5;
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');
const button = document.getElementsByTagName('button')[0];


document.getElementById('title').innerText = 'Paleta de Cores';
clearBoard.innerText = 'Limpar';

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

document.getElementsByClassName('color')[0].classList.add('selected');

function getColor(colorX) {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  colorX.target.classList.add('selected');
  console.log(colorX.target);
 }

function colorPixel(pixelX) {
  let newColor = document.getElementsByClassName('selected')[0].style.background;
  pixelX.target.style.background = newColor;
}

colorsPalette.addEventListener('click', getColor);

pixelBoard.addEventListener('click', colorPixel);

button.addEventListener('click', function() {
  for (let index = 1; index < pixel.length; index += 1) {
    pixel[index].style.background = 'white'
  }
})

// function getColor(colorX) {
//   clickedColor = colorX.target.style.background;
//  }

// function colorPixel(pixelX) {
//   pixelX.target.style.background = clickedColor;
// }

// colorsPalette.addEventListener('click', getColor);

// pixelBoard.addEventListener('click', colorPixel);
