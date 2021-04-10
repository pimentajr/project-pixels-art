let pixelBoard = document.querySelector('#pixel-board');
let gridSize = 5;
function gridCreate (gridSize) {
for (let index = 0; index < gridSize; index +=1) {
  let pixelDivs = document.createElement('div');
  pixelBoard.appendChild(pixelDivs);
  pixelDivs.className = "line";
  for (let secondIndex = 0; secondIndex < gridSize; secondIndex +=1) {
    let pixelDivs = document.createElement('div');
    pixelBoard.appendChild(pixelDivs);
    pixelDivs.className = "Pixel";
    }
  }
}
gridCreate(gridSize);