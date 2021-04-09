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
const pixelBoardSize = 5;

for (let lineIndex = 1; lineIndex <= pixelBoardSize; lineIndex += 1) {
  const createLineDivs = document.createElement('div');
  createLineDivs.className = 'line-pixel';
  for (let columnIndex = 1; columnIndex <= pixelBoardSize; columnIndex += 1) {
    const createDivs = document.createElement('div');
    createDivs.className = 'pixel';
    createLineDivs.appendChild(createDivs);
  }
  pixelBoard.appendChild(createLineDivs);
}

// Requisito 7
const colorPaleteDiv = document.querySelector('#color-palette');

function selectColor() {
  colorPaleteDiv.addEventListener('click', (event)=> {
    const colorDiv = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      colorDiv.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

selectColor();

// Requisito 8
pixelBoard.addEventListener('click', (event)=> {
  let storageColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = storageColor;
  }
});