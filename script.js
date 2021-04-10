// global varible
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function createColorPalette() {
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.marginRight = '5px';
    colorPalette.appendChild(div);
  }
}
createColorPalette();

function createPixels() {
  const pixels = 25;
  for (let i = 0; i < pixels; i += 1) {
    const divPixels = document.createElement('div');
    divPixels.className = 'pixel';
    divPixels.style.marginRight = '3px';
    pixelBoard.appendChild(divPixels);
  }
}
createPixels();
