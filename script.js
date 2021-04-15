// cor preta no 1 square
const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.style.backgroundColor = 'black';

// cor no 2 square
const secondColor = document.getElementsByClassName('color')[1];
secondColor.style.backgroundColor = 'rgb(204, 204, 102)';

// cor no 3 square
const thirdColor = document.getElementsByClassName('color')[2];
thirdColor.style.backgroundColor = 'rgb(121, 140, 53)';
  
// cor no 4 square
const forthColor = document.getElementsByClassName('color')[3];
forthColor.style.backgroundColor = 'rgb(72, 89, 34)';

// cria os 25 pixels em formade um quadrado 5x5
const pixelBoard = document.getElementById('pixel-board');

function createColumnLines() {
  for (let index = 0; index < 5; index++) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let i = 0; i < 5; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
  }
}
createColumnLines();

// primeira cor selected preta e mudar quando outra cor for selecionada

function blackColorFirst() {
  colorBlack.className = 'color selected';
}

window.onload = blackColorFirst;

const colorPalette = document.querySelector('#color-palette');

function selectedColor(event) {
  const colorSelected = document.querySelector('.selected');
  const color = event.target;
  if (color.className !== 'color selected') {
    colorSelected.classList.remove('selected');
    color.classList.add('selected');
  }
}

colorPalette.addEventListener('click', selectedColor);

// colorir os square
function colorSquare(event) {
  const colorSelected = document.querySelector('.selected');
  const selectedBGColor = getComputedStyle(colorSelected).backgroundColor;
  const pixel = event.target;
  if (pixel.className === 'pixel') {
    pixel.style.backgroundColor = selectedBGColor;      
    }
}

pixelBoard.addEventListener('click', colorSquare);

// botao de limpar
const clearButton = document.querySelector('#clear-board');

function clearPixels() {
  let clearPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearPixel.length; i++) {
    clearPixel[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearPixels);