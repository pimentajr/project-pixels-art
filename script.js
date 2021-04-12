const pixelBoard = document.getElementById('pixel-board');

function createColumnLines() {
  for (let index = 0; index < 5; index += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let i = 0; i < 5; i += 1) {
      let pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelLine.appendChild(pixelColumn);
    }
  }
}
  
createColumnLines();
