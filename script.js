function createBoxesDiv(numberOfColors) {
  const selectPalette = document.querySelector('#color-palette');
  for (let index = 0; index < numberOfColors; index += 1) {
    const createDivs = document.createElement('div');
    selectPalette.appendChild(createDivs);
    createDivs.classList.add('color');
  }
  const arrayOfColors = ['black', 'blue', 'purple', 'red'];
  const selectDivs = document.querySelectorAll('.color');
  selectDivs.forEach((box, index) => {
    const div = box; div.style.backgroundColor = arrayOfColors[index];
  });
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}
createBoxesDiv(4);

function addPixels(size) {
  const selectPixels = document.querySelector('#pixel-board');
  for (let index = 0; index < size; index += 1) {
    const createPixelsRow = document.createElement('div');
    selectPixels.appendChild(createPixelsRow);
    createPixelsRow.classList.add('pixel');
    createPixelsRow.innerText = 'Row';
    for (let indice = 1; indice < size; indice += 1) {
      const createPixelsColumn = document.createElement('div');
      selectPixels.appendChild(createPixelsColumn);
      createPixelsColumn.classList.add('pixel');
      createPixelsColumn.innerText = 'Column';
    }
  }
}
addPixels(5);

function colorSelectedByClick() {
  const palette = document.querySelector('#color-palette');
  palette.addEventListener('click', (selectColor) => {
    const eventTarget = selectColor.target;
    const color = document.querySelectorAll('.color');
    color.forEach((element) => element.classList.remove('selected'));
    eventTarget.classList.add('selected');
  });
}
colorSelectedByClick();

function addSelecteColordByClick() {
  const board = document.querySelector('#pixel-board');
  board.addEventListener('click', (paintPixel) => {
    const selectedColor = document.querySelector('.selected');
    const eventTarget = paintPixel.target;
    eventTarget.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
  });
}
addSelecteColordByClick();

function clearBoard () {
  const selectButton = document.querySelector('#clear-board');
  selectButton.addEventListener('click', () => {
    const selectPixel = document.querySelectorAll('.pixel');
    selectPixel.forEach((element) => element.style.backgroundColor = 'white');
  });
}
clearBoard();
