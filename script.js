const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

let savedColor = 'black';

function selectingColor(color) {
  const colorTarget = color.target;
  if (colorTarget.classList.contains('color')) {
    const removeColor = document.querySelector('.selected');
    removeColor.classList.remove('selected');

    savedColor = colorTarget.style.backgroundColor.classList.add('selected');
  }
}

function setColor(color) {
  const newColor = color.target;
  if (newColor.className === 'pixel') {
    newColor.style.backgroundColor = savedColor;
  }
}

colorPalette.addEventListener('click', selectingColor);
pixelBoard.addEventListener('click', setColor);
