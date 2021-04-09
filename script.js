const getcolorPalette = document.getElementById('color-palette');
const getpixelBoard = document.getElementById('pixel-board');
const getColors = document.querySelectorAll('.color');
const getclearBoard = document.getElementById('clear-board');
const getPixel = document.querySelectorAll('.pixel');

function setSelect(event) {
  getColors.forEach((elem) => {
    elem.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

getcolorPalette.addEventListener('click', setSelect);

function paintPixel(event) {
  const ev = event.target;
  getColors.forEach((elem) => {
    if (elem.classList[2] === 'selected') {
      const color = elem.classList[1];
      ev.style.backgroundColor = color;
    }
  });
}

getpixelBoard.addEventListener('click', paintPixel);

function btnClear() {
  getPixel.forEach((elem) => {
    elem.style.removeProperty('background-color');
  });
}

getclearBoard.addEventListener('click', btnClear);
