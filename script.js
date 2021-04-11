window.onload = function() {
  let black = document.getElementById('black');
  black.classList.add('selected');
}

function setColor(event) {
  let test = event.target;
  test.style.backgroundColor = 'black';
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