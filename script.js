let color = 'black';
const pixelBoard = document.querySelector('#pixel-board').children;
const pixelToColor = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const clearBoard = document.getElementById('clear-board');
const black = document.querySelector('#black');
black.classList.add('selected');
const quant = 5;

function createPixelBoard() {
  for (let index = 0; index < quant; index += 1) {
    for (let index2 = 0; index2 < quant; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard[index].appendChild(pixel);
    }
  }
}

function clearBoardColors() {
  window.location.reload();
}

function getColor(c) {
  document.querySelector('.selected').classList.remove('selected');
  c.target.classList.add('selected');
  color = document.querySelector('.selected').id;
}

function setColor(d) {
  const pixel = d.target;
  pixel.classList.add(color);
}

window.onload = () => {
  createPixelBoard();
  clearBoard.addEventListener('click', clearBoardColors);
  colorPalette.addEventListener('click', getColor);
  pixelToColor.addEventListener('click', setColor);
};
