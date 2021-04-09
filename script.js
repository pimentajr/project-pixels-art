window.onload = function () {
  const initialColor = document.querySelector('#black');
  initialColor.className += ' selected';
};

const colors = ['black', 'red', 'blue', 'green'];
const pixel = 5;
const pixelBoard = document.querySelector('#pixel-board');

function createPalette(colorTitle) {
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < colorTitle.length; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.id = colorTitle[index];
    colorBox.className = 'color';
    colorBox.style.backgroundColor = colorTitle[index];
    colorPalette.appendChild(colorBox);
  }
}

function createPixelLine(numberOfPixelsXY) {
  const lineBox = document.createElement('div');
  lineBox.className = 'lineBox';
  for (let index = 0; index < numberOfPixelsXY; index += 1) {
    const pixelBox = document.createElement('div');
    pixelBox.className = 'pixel';
    lineBox.appendChild(pixelBox);
    pixelBoard.appendChild(lineBox);
    console.log(pixelBox);
  }
}

function numberOfLines(lines) {
  for (let index = 0; index < lines; index += 1) {
    createPixelLine(pixel);
  }
}

createPalette(colors);
numberOfLines(pixel);
