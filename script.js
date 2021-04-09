const colorDivs = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
// Requisito 2
function setColorToPalete() {
  for (let index = 0; index < colorDivs.length; index += 1) {
    const colorDivsIDValue = colorDivs[index].id;
    colorDivs[index].style.backgroundColor = colorDivsIDValue;
  }
}
setColorToPalete();
// Requisito 4
let pixelBoardSize = 5;

for (let lineIndex = 1; lineIndex <= pixelBoardSize; lineIndex += 1){
  const createColumnDivs = document.createElement('div');
  createColumnDivs.className = 'column-pixel';
  for (let columnIndex = 1; columnIndex <= pixelBoardSize; columnIndex += 1) {
    const createDivs = document.createElement('div');
    createDivs.className = 'pixel';
    createColumnDivs.appendChild(createDivs);
  }
  pixelBoard.appendChild(createColumnDivs);
}
