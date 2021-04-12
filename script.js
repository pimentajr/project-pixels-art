document.querySelector('#black').style.backgroundColor = 'black';
document.querySelector('#red').style.backgroundColor = 'red';
document.querySelector('#yellow').style.backgroundColor = 'yellow';
document.querySelector('#blue').style.backgroundColor = 'blue';

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

function paintCanvas() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (pixel) => {
    const e = pixel.target;
    const selected = document.querySelector('.selected').style.backgroundColor;
    if (e.className === 'pixel') {
      e.style.backgroundColor = selected;
    }
  });
} paintCanvas();

function boardWhite() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', (use) => {
    const board = document.querySelectorAll('.pixel');
    for (let index = 0; index < board.length; index += 1) { 
      const element = board[index];
      element.style.backgroundColor = 'white';
    }
  });
}boardWhite();
