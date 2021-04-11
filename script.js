const colorSelected = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const selectClickColor = document.querySelector('.selected');
const buttonClear = document.querySelector('#clear-board');

function selectColor() {
  colorSelected.addEventListener('click', (e) => {
    const eTarget = e.target;
    colors.forEach((element) => element.classList.remove('selected'));
    eTarget.classList.add('selected');
  });
}
selectColor();

function paintPixel() {
  pixelBoard.addEventListener('click', (ev) => {
    const evTarget = ev.target;
    evTarget.style.backgroundColor = getComputedStyle(selectClickColor).backgroundColor;
  });
}
paintPixel();

function clearAllBoard() {
  buttonClear.addEventListener('click', () => {
    const clearBoard = document.querySelectorAll('.pixel');
    clearBoard.forEach((element) => {
      const cell = element;
      cell.style.backgroundColor = 'white';
    });
  });
}
clearAllBoard();
