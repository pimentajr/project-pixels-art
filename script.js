const boardSize = 5;
const colorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');

function setColors() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].setAttribute('style', `background-color: ${colors[index].dataset.color};`);
  }
}

function setBoardSize(size) {
  pixelBoard.innerHTML = '';

  for (let index = 0; index < size; index += 1) {
    const div = document.createElement('div');
    const row = div.cloneNode();
    row.classList.add('table-row');
    const cell = div.cloneNode();
    cell.classList.add('pixel');

    for (let secondIndex = 0; secondIndex < size; secondIndex += 1) {
      const newCell = cell.cloneNode();
      row.appendChild(newCell);
    }

    pixelBoard.appendChild(row);
  }
}

function onPageLoad() {
  setColors();
  setBoardSize(boardSize);
  colorPalette.firstElementChild.classList.add('selected');
}

window.onload = onPageLoad;
