const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'red', 'green', 'blue'];

function createColorPalette() {
  for (let index = 0; index < colorPalette.children.length; index += 1) {
    // colorPalette.children[index].innerHTML = colors[index];
    colorPalette.children[index].style.backgroundColor = colors[index];
    colorPalette.children[index].style.color = colors[index];
  }
}

createColorPalette();

const pixelBoard = document.querySelector('#pixel-board');

function fillPixelBoard(boardSize) {
  for (let lineIndex = 0; lineIndex < boardSize; lineIndex += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let pixelIndex = 0; pixelIndex < boardSize; pixelIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

fillPixelBoard(5);

function iniciateColorPalette() {
  for (let index = 0; index < colorPalette.children.length; index += 1) {
    if (colorPalette.children[index].style.backgroundColor === 'black') {
      colorPalette.children[index].classList.add('selected');
    }
  }
}

iniciateColorPalette();
