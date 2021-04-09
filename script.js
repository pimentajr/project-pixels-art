const colorPalette = document.getElementById('color-palette');
let colorToPaint = document.getElementsByClassName('selected')[0];
let pixelBoard = document.getElementById('pixel-board');


function createPixelsSize (size) {
    let pixelBox = document.getElementById('pixel-board')
    for (let index = 0; index < size; index += 1) {
      let pixelColumn = document.createElement('div');
      pixelBox.appendChild(pixelColumn);
      

      for (let index2 = 0; index2 < size; index2 += 1) {
        let pixelLine = document.createElement('div');
        pixelBox.appendChild(pixelLine);
        pixelLine.className = 'pixelVazio';
      }
    }
}
createPixelsSize (5)

function selectedColor (event) {
  colorToPaint.classList.remove('selected');
  colorToPaint = event.target;
  colorToPaint.classList.add('selected');
}
colorPalette.addEventListener('click', selectedColor);

function printBoard() {
  document.getElementById('pixel-board').addEventListener('click', (event) => {
    const printBox = event.target;
    switch (document.querySelector('.selected').id) {
    case 'black-selector':
      printBox.style.backgroundColor = 'black';
      break;
    case 'red-selector':
      printBox.style.backgroundColor = 'red';
      break;
    case 'green-selector':
      printBox.style.backgroundColor = 'green';
      break;
    case 'blue-selector':
      printBox.style.backgroundColor = 'blue';
      break;
    default:
    }
  });
}
printBoard();