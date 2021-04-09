function creatPallete() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'red', 'orange', 'yellow'];
  
  for (let index = 0; index < colors.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
    colorPalette.appendChild(createDiv);
  }
}
creatPallete();

function pixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const creatPixel = document.createElement('div');
  creatPixel.className = 'pixel';
  pixelBoard.appendChild(creatPixel);
}
pixelBoard();
