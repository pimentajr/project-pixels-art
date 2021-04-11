function createColunnLines() {
  for (let index = 0; index < 5; index += 1) {
    const colunn = document.createElement('div');
    colunn.className = 'colunn';
    document.querySelector('#pixel-board').appendChild(colunn);
    document.querySelectorAll('.colunn');
    for (let indice = 0; indice < 5; indice += 1) {
      const lines = document.createElement('div');
      lines.className = 'pixel';
      colunn.appendChild(lines);
    }
  }
} createColunnLines();

function inicialColor() {
  const black = document.querySelector('#black');
  black.className = 'color selected';
} inicialColor();

const paleta = document.querySelector('#color-palette');

function choosePalette() {
  paleta.addEventListener('click', (cor) => {
    const eventTarget = cor.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
} choosePalette();

const pixelBoard = document.querySelector('#pixel-board');
function paintCanvas() {
  pixelBoard.addEventListener('click', (pixel) => {
    const e = pixel.target;
    /* const selected = document.getElementsByClassName('selected'); */
    if (e.className === 'pixel') {
      e.style.backgroundColor = 'red';/* document.querySelector('.selected').style.backgroundColor;
         */
    }
  });
} paintCanvas();

function boardWhite() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const board = document.querySelectorAll('.pixel');
    for (let index = 0; index < board.length; index += 1) {
      const element = board[index];
      element.style.backgroundColor = 'white';
    }
  });
} boardWhite();
