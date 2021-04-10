let actualMouseColor = 'Black';
const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const palleteColors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');
const createBoardButton = document.querySelector('#generate-board');

function divClean() {
  const pixelQuant = pixels.length;
  const br = document.getElementsByTagName('br');
  const brQuant = br.length;

  for (let index = 0; index < pixelQuant; index += 1) {
    pixelBoard.removeChild(pixels[0]);
  }

  for (let index = 0; index < brQuant; index += 1) {
    pixelBoard.removeChild(br[0]);
  }
}

function boardSizeGenerator(valueTwo) {
  divClean();
  for (let index = 0; index < valueTwo * valueTwo; index += 1) {
    if (index > 1 && index % valueTwo === 0) {
      const brNew = document.createElement('br');
      pixelBoard.appendChild(brNew);
    }
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

function boardGenerator(value) {
  let valor = value;
  if (Number.isNaN(value)) {
    window.alert('Board inválido!');
    return false;
  }

  if (value > 50) {
    valor = 50;
  } else if (value < 5) {
    valor = 5;
  }

  boardSizeGenerator(valor);
}

function colorPalletDefinition() {
  for (let index = 0; index < palleteColors.length; index += 1) {
    if (index === 0) {
      palleteColors[index].style.backgroundColor = 'black';
    } else {
      const randomColor = Math.ceil(Math.random() * 16777214).toString(16);
      palleteColors[index].style.backgroundColor = `#${randomColor}`;
    }
  }
}

function getColor(element) {
  const pencil = element.target;
  const color = getComputedStyle(pencil).backgroundColor;
  if (pencil.parentNode === colorPallete) {
    actualMouseColor = color;
    const actualSelected = document.querySelector('.selected');
    actualSelected.classList.remove('selected');
    pencil.classList.add('selected');
  }
}

function paint(element) {
  const paintedBlock = element.target;
  if (paintedBlock.parentNode === pixelBoard) {
    if (actualMouseColor === paintedBlock.style.backgroundColor) {
      paintedBlock.style.backgroundColor = 'white';
    } else if (actualMouseColor !== '') {
      paintedBlock.style.backgroundColor = actualMouseColor;
    }
  }
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearBoard);
window.onload = function () {
  colorPalletDefinition();
  boardGenerator(5);
};
createBoardButton.addEventListener('click', function () {
  const inputValue = parseInt(document.querySelector('input').value, 10);
  boardGenerator(inputValue);
});
addEventListener('click', getColor);
addEventListener('click', paint);
