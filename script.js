const pixelBoard = document.querySelector('#pixel-board');

function PixelBoardMaker(boardSize) {
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

PixelBoardMaker(5);
