const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'blue', 'yellow', 'magenta'];
for (let index = 0; index < 4; index += 1) {
  const colorBox = document.createElement('div');
  colorBox.className = 'color';
  colorBox.style.backgroundColor = colors[index];
  colorPalette.appendChild(colorBox);
}

const pixelBoard = document.querySelector('#pixel-board');
const lines = 5;
const columns = 5;
for (let lineIndex = 0; lineIndex < lines; lineIndex += 1) {
  const newLine = document.createElement('div');
  pixelBoard.appendChild(newLine);
  for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    newLine.appendChild(newPixel);
  }
}
