window.onload = function pageLoad () {
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
