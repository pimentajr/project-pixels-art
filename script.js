const gridX = 5;
const gridY = 5;

function pixelGrid() {
  const grid = document.querySelector('#pixel-board');
  for (let index = 0; index < (gridX * gridY); index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    grid.appendChild(pixel);
  }
}

pixelGrid();
