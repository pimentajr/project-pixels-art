const paletteColors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const colors = ['black', 'red', 'blue', 'green'];
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

function createPixels(inputValue) {
  inputValue = valueInput.value;
  if (inputValue === '') {
    alert('Board inválido!');
  }

  if (inputValue < 5) {
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }

  if (inputValue !== '') {
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
  }
}

buttonGenerateBoard.addEventListener('click', createPixels);

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
  for (let indexPixel = 0; indexPixel < pixels.length; indexPixel += 1) {
    pixels[indexPixel].addEventListener('click', () => {
      const backColor = document.querySelector('.selected').style.backgroundColor;
      pixels[indexPixel].style.backgroundColor = backColor;
    });
  }
}

function clear() {
  const buttonClear = document.getElementById('clear-board');
  buttonClear.addEventListener('click', () => {
    for (let indexClear = 0; indexClear < pixels.length; indexClear += 1) {
      pixels[indexClear].style.backgroundColor = 'white';
    }
  });
}

selectColor();
paintPixel();
clear();
