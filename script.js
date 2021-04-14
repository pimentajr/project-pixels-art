const pixelBoard = document.getElementById('pixel-board');
const tableGrid = document.getElementById('grid');
const palette = document.getElementById('color-palette');
const buttonClear = document.getElementById('clear-board');
const inputSize = document.getElementById('board-size');
const buttonBoard = document.getElementById('generate-board');
const tableRows = document.querySelectorAll('tr');

function setPixelColor(color) {
  pixelBoard.addEventListener('click', (e) => {
    e.target.style.backgroundColor = color;
  });
}

setPixelColor('black');

function selectThis(e) {
  if (e.target.classList[0] === 'color') {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add('selected');
    const selectedColor = e.target.classList[1];
    setPixelColor(selectedColor);
  }
}

palette.addEventListener('click', selectThis);

buttonClear.addEventListener('click', () => {
  for (let i = 0; i < tableRows.length; i += 1) {
    const pixels = tableRows[i].children;
    for (let n = 0; n < pixels.length; n += 1) {
      pixels[n].style.backgroundColor = 'white';
    }
  }
});

function removeBoard() {
  for (let i = 0; i < tableRows.length; i += 1) {
    tableGrid.removeChild(tableRows[i]);
  }
}

function createBoard(boardSize) {
  for (let l = 0; l < boardSize; l += 1) {
    tableGrid.appendChild(tableRows);
    for (let c = 0; c < boardSize; c += 1) {
      const pixels = document.createElement('td');
      tableRows.appendChild(pixels);
      pixels.classList.add('pixel');
    }
  }
}
createBoard(5);

buttonBoard.addEventListener('click', () => {
  const sizeValue = inputSize.value;
  if (sizeValue > 0) {
    removeBoard();
    createBoard(sizeValue);
  } else {
    alert('Board inválido!');
  }
});
