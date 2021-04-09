const pixelBoard = document.getElementById('pixel-board');
function createPixels(line) {
  for (let column = 1; column <= 5; column += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
}
function createRows() {
  for (let row = 1; row <= 5; row += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    createPixels(line);
  }
}
createRows();
