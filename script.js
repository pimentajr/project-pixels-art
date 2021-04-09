const boardSize = 5;
const selectedClass = 'selected';
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

function setSelectedColor(target) {
  const selectedColors = document.getElementsByClassName(selectedClass);

  if (selectedColors.length > 0) {
    for (let index = 0; index < selectedColors.length; index += 1) {
      selectedColors[index].classList.remove(selectedClass);
    }
  }

  target.classList.add(selectedClass);
}

function colorPaletteClickHandler({ target }) {
  if (target.classList.contains('color') && !target.classList.contains(selectedClass)) {
    setSelectedColor(target);
  }
}

function setColorElementClickEvent() {
  colorPalette.addEventListener('click', colorPaletteClickHandler);
}

function paintPixelElementHandler({ target }) {
  if (target.classList.contains('pixel')) {
    const { color } = document.getElementsByClassName(selectedClass)[0].dataset;
    target.setAttribute('style', `background-color: ${color};`);
  }
}

function setPixelClickEvent() {
  pixelBoard.addEventListener('click', paintPixelElementHandler);
}

function onPageLoad() {
  setColors();
  setBoardSize(boardSize);
  setSelectedColor(colorPalette.firstElementChild);
  setColorElementClickEvent();
  setPixelClickEvent();
}

window.onload = onPageLoad;
