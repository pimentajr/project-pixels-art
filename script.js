const pixelBoard = document.getElementById('pixel-board');
const boardLength = 25;

for (let index = 0; index < boardLength; index += 1) {
  const pixelDiv = document.createElement('div');

  pixelDiv.className = 'pixel';
  pixelDiv.style.backgroundColor = 'white';

  pixelBoard.appendChild(pixelDiv);
}
