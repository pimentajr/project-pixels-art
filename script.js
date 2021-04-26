const colorPallet = document.querySelector('#color-palette');

function createRGB() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function createColor(array) {
  for (let i = 0; i < array.length; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = array[i];
    colorPallet.appendChild(color);
  }
}
createColor(['black', createRGB(), createRGB(), createRGB()]);

function createBoard(n) {
  const board = document.querySelector('#pixel-board');

  for (let row = 0; row < n; row += 1) {
    const rowLine = document.createElement('div');
    rowLine.className = 'rowline';
    for (let column = 0; column < n; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      rowLine.appendChild(pixel);
    }
    board.appendChild(rowLine);
  }
}
createBoard(5);

function blackSelected() {
  const black = document.querySelector('.color');
  if (black.style.backgroundColor === 'black') {
    black.classList.add('selected');
  }
}
blackSelected();

function colorSelect() {
  const colorSelection = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelection.length; i += 1) {
    colorSelection[i].addEventListener('click', () => {
      for (let j = 0; j < colorSelection.length; j += 1) {
        colorSelection[j].classList.remove('selected');
      }
      colorSelection[i].classList.add('selected');
    });
  }
}
colorSelect();

function palletSelectColor() {
  const selectedPixel = document.getElementById('pixel-board');
  selectedPixel.addEventListener('click', (event) => {
    const selectColor = document.querySelector('.selected');
    const selectedColor = selectColor.style.backgroundColor;
    const element = event.target;
    if (element.className === 'pixel') {
      element.style.backgroundColor = selectedColor;
    }
  });
}
palletSelectColor();

function createReset() {
  const pixel = document.getElementsByClassName('pixel');
  const btnReset = document.querySelector('#clear-board');
  btnReset.addEventListener('click', () => {
    for (let cell = 0; cell < pixel.length; cell += 1) {
      if (pixel[cell].style.backgroundColor !== 'white') {
        pixel[cell].style.backgroundColor = 'white';
      }
    }
  });
}
createReset();

function setBoard() {
  const inputBox = document.querySelector('#board-size');
  const btnVqv = document.querySelector('#generate-board');
  const pxBoard = document.querySelector('#pixel-board');
  btnVqv.addEventListener('click', () => {
    if (inputBox.value === '') {
      alert('Board inválido!');
    } else if (inputBox.value <= 5) {
      inputBox.value = 5;
    } else if (inputBox.value > 50) {
      inputBox.value = 50;
    }
    pxBoard.innerHTML = '';
    createBoard(inputBox.value);
  });
}
setBoard();
