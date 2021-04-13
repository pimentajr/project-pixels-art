window.onload = function pageLoad() {
  document.getElementById('black').classList.add('selected');
};

function setColorAll(event) {
  const aux = document.querySelectorAll('.selected');
  for (let index = 0; index < aux.length; index += 1) {
    aux[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const colorPalettes = document.querySelector('#color-palette');
colorPalettes.addEventListener('click', setColorAll);

const pixelBoard = document.querySelector('#pixel-board');

function pxBoard(event) {
  const colorPixel = document.querySelector('.selected');
  const color = window.getComputedStyle(colorPixel).backgroundColor;
  const eventPxBoard = event.target;
  eventPxBoard.style.backgroundColor = color;
}
pixelBoard.addEventListener('click', pxBoard);

const btn = document.getElementById('clear-board');

function clearBoard() {
  const clPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < clPixel.length; index += 1) {
    clPixel[index].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', clearBoard);

function createElm(elementParam) {
  for (let index = 0; index < elementParam; index += 1) {
    const line = document.createElement('div');
    line.className = 'linePixel';
    
    for (let index2 = 0; index2 < elementParam; index2 += 1) {
      const lineChild = document.createElement('div');
      lineChild.className = 'pixel';
      line.appendChild(lineChild);
    }
    pixelBoard.appendChild(line);
  }
}

const boardSize = document.getElementById('board-size');
const vqv = document.getElementById('generate-board')

function createPixel() {
  if (boardSize.value < 5) {
    boardSize.value = 5;
    createElm(boardSize.value);
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
    createElm(boardSize.value);
  } else {
    createElm(boardSize.value);
  }
}

function checkImput() {
  if (!boardSize.value) {
    window.alert('Board inválido!');
  } else {
    pixelBoard.innerHTML = '';
  }
  createPixel();
}

vqv.addEventListener('click', checkImput);
