const paletteColor = document.getElementsByClassName('color');
paletteColor[0].style.backgroundColor = 'black';
paletteColor[1].style.backgroundColor = 'darkgreen';
paletteColor[2].style.backgroundColor = 'purple';
paletteColor[3].style.backgroundColor = 'darkblue';
paletteColor[0].classList.add('selected');

function addAndRemoveColors() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    const colorTarget = event.target;
    const classColor = document.getElementsByClassName('color');
    for (let indexColor = 0; indexColor < classColor.length; indexColor += 1) {
      classColor[indexColor].classList.remove('selected');
      if (colorTarget.className === 'color') {
        colorTarget.classList.add('selected');
      }
    }
  });
}
addAndRemoveColors();

function paintPixels() {
  const pickPixels = document.getElementById('pixel-board');
  pickPixels.addEventListener('click', (eventColor) => {
    const pickColor = eventColor.target;
    const whereIsSelected = document.querySelector('.selected');
    if (pickColor.className === 'pixel') {
      pickColor.style.backgroundColor = whereIsSelected.style.backgroundColor;
    }
  });
}
paintPixels();

const clearBoard = document.querySelector('#clear-board');

function clearPixel() {
  const clearAll = document.querySelectorAll('.pixel');
  for (let indexClear = 0; indexClear < clearAll.length; indexClear += 1) {
    const selectedClear = clearAll[indexClear];
    selectedClear.removeAttribute('style');
  }
}
clearBoard.addEventListener('click', clearPixel);

function sizingBoard(horizontal, vertical) {
  const board = document.querySelector('table');
  const table = document.createElement('table');
  table.id = 'pixel-board';
  for (let indexHorizontal = 0; indexHorizontal < horizontal; indexHorizontal += 1) {
    const newHorizontalBlocks = document.createElement('tr');
    table.appendChild(newHorizontalBlocks);
    for (let indexVertical = 0; indexVertical < vertical; indexVertical += 1) {
      const newVerticalBlock = document.createElement('td');
      newVerticalBlock.onclick = paintPixels;
      newVerticalBlock.className = 'pixel';
      newHorizontalBlocks.appendChild(newVerticalBlock);
    }
  }
  board.replaceWith(table);
}

const generateBoard = document.querySelector('#generate-board');
function inputBoard(boardValue) {
  const input = boardValue.target.previousElementSibling;

  if (input.value !== '') {
    sizingBoard(input.value, input.value);
  }
  if (input.value < 5) {
    input.value = 5;
    alert('Board Inválido!');
  } else if (input.value > 50) {
    input.value = 50;
    alert('Board Inválido');
  }
}
generateBoard.addEventListener('click', inputBoard);

function randomizingColors() {
  return Math.floor(Math.random() * 255);
}

function getRandomColors() {
  /* const firstRandomColors = Math.floor(Math.random() * 255);
  const secondRandomColors = Math.floor(Math.random() * 255);
  const thirdRandomColors = Math.floor(Math.random() * 255); */
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';

  for (let indexRandomColors = 1; indexRandomColors < colors.length; indexRandomColors += 1) {
    const color = colors[indexRandomColors];
    const rgb = `rgb(${randomizingColors()}, ${randomizingColors()}, ${randomizingColors()})`;
    color.style.backgroundColor = rgb;
  }
}
window.onload = getRandomColors;
