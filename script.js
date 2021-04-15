const buttonClear = document.getElementById('clear-board');
const buttonBoard = document.getElementById('generate-board');
const input = document.getElementById('board-size');
const palette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const tableGrid = document.getElementById('grid');

function setPixelColor(color) {
  pixelBoard.addEventListener('click', (e) => {
    e.target.style.backgroundColor = color;
  });
}

setPixelColor('black');

function selectThis(e) {
  if (e.target.classList[0] === 'color') { // certifica que é um elemento da palheta
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add('selected');
    const selectedColor = e.target.classList[1];
    setPixelColor(selectedColor);
  }
}

palette.addEventListener('click', selectThis);

buttonClear.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('tr');
  for (let r = 0; r < tableRows.length; r += 1) {
    const pixels = tableRows[r].children;
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  }
});

function removeBoard() {
  const tableRows = document.querySelectorAll('tr');
  for (let i = 0; i < tableRows.length; i += 1) {
    tableGrid.removeChild(tableRows[i]);
  }
}

function createBoard(boardSize) {
  for (let l = 0; l < boardSize; l += 1) {
    const boardRows = document.createElement('tr');
    tableGrid.appendChild(boardRows);
    for (let c = 0; c < boardSize; c += 1) {
      const pixels = document.createElement('td');
      boardRows.appendChild(pixels);
      pixels.classList.add('pixel');
    }
  }
}
createBoard(5);

buttonBoard.addEventListener('click', () => {
  let sizeValue = input.value;
  if (sizeValue !== '') {
    if (sizeValue < 5) {
      sizeValue = 5;
    } else if (sizeValue > 50) {
      sizeValue = 50;
    }
    removeBoard();
    createBoard(sizeValue);
  } else {
    alert('Board inválido!');
  }
});
