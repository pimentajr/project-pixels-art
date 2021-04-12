window.onload = function () {
  document.getElementById('black').classList.add('selected');
}

function setColorAll(event) {
  let aux = document.querySelectorAll('.selected');
  for (let index = 0; index < aux.length; index += 1) {
    aux[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const colorPalettes = document.querySelector('#color-palette');
colorPalettes.addEventListener('click', setColorAll);

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', pxBoard);

function pxBoard(event) {
  let colorPixel = document.querySelector('.selected');
  const color = window.getComputedStyle(colorPixel).backgroundColor;
  event.target.style.backgroundColor = color;
}

const btn = document.getElementById('btnReset');
//const tab = document.querySelectorAll('pixel');

function clearBoard() {
  const clPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < clPixel.length; index += 1) {
    clPixel[index].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', clearBoard);
