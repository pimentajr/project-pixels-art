const colorPalette = document.querySelector('#color-palette');
const colorPaletteList = colorPalette.children;
const colors = ['black', 'red', 'green', 'blue'];

function createColorPalette() {
  for (let index = 0; index < colorPaletteList.length; index += 1) {
    colorPaletteList[index].innerHTML = colors[index];
    colorPaletteList[index].style.backgroundColor = colors[index];
    colorPaletteList[index].style.color = colors[index];
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
  for (let index = 0; index < colorPaletteList.length; index += 1) {
    if (colorPaletteList[index].style.backgroundColor === 'black') {
      colorPaletteList[index].classList.add('selected');
    }
  }
}

iniciateColorPalette();

function removeSelected() {
  for (let index = 0; index < colorPaletteList.length; index += 1) {
    if (colorPaletteList[index].className.includes('selected')) {
      colorPaletteList[index].classList.remove('selected');
    }
  }
}

function selectColor(event) {
  if (event.target.id !== 'color-palette') {
    removeSelected();
    event.target.classList.add('selected');
  }
}

colorPalette.addEventListener('click', selectColor);

function paintPixel(event) {
  if (event.target.className === 'pixel') {
    let selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  }
}

pixelBoard.addEventListener('click', paintPixel);
