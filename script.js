function createPaletteColorDiv(color) {
  const palletColorDiv = document.createElement('div');
  if (color === 'black') {
    palletColorDiv.className = 'color selected';
  }
  palletColorDiv.className = 'color';
  palletColorDiv.style.backgroundColor = color;
  document.querySelector('#color-palette').appendChild(palletColorDiv);
}
function createBoardPixels() {
  const boardPixelsDiv = document.createElement('div');
  boardPixelsDiv.className = 'pixel';
  document.querySelector('#pixel-board').appendChild(boardPixelsDiv);
}

for (let index = 1; index <= 25; index += 1) {
  createBoardPixels();
}

createPaletteColorDiv('black');
createPaletteColorDiv('yellow');
createPaletteColorDiv('red');
createPaletteColorDiv('green');
