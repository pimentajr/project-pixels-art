window.onload = createBoard;

function createBoard() {
  let boardHeight = 5;
  let boardWidth = 5;
  let board = document.getElementById('pixel-board');
  for (let index = 1; index <= (boardHeight * boardWidth); index += 1) {
    let square = document.createElement('div');
    square.classList.add('pixel');
    board.appendChild(square);
  }
}
const colorPalette = document.querySelector('#color-palette');

function selectColor() {
  colorPalette.addEventListener('click', changeId);
}
function changeId() {
  const colorBlock = document.querySelector('.selected')
  if (event.target.id !== colorPalette) {
    colorBlock.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
selectColor();

const pixelBoard = document.querySelector('#pixel-board');

function addColor() {
  pixelBoard.addEventListener('click', changeColor);
}
function changeColor() {
  const color = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const pixelClick = event.target;
    pixelClick.id = color;
  }
}
addColor();
