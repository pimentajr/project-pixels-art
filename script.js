let pixelBoard = document.getElementById('pixel-board');
let boardLength = 25;

for (let index = 0; index < boardLength; index += 1) {
  let pixelDiv = document.createElement('div');

  pixelDiv.className = 'pixel';
  pixelDiv.style.backgroundColor = 'white';

  pixelBoard.appendChild(pixelDiv);
}