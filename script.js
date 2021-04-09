const getcolorPalette = document.getElementById('color-palette');
const getpixelBoard = document.getElementById('pixel-board');
const getColors = document.querySelectorAll('.color');

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
      ev.style.background = color;
    }
  });
}

getpixelBoard.addEventListener('click', paintPixel);
