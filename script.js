// const colorPalette = document.getElementById('color-palette');
// let colorToPaint = document.getElementsByClassName('selected')[0];
const pixelBoard = document.getElementById('pixel-board');

function createPixelsSize(size) {
  let pixelBox = document.getElementById('pixel-board')
  for (let index = 0; index < size; index += 1) {
    let pixelColumn = document.createElement('div');
    pixelBox.appendChild(pixelColumn);
      
    for (let index2 = 0; index2 < size; index2 += 1) {
      let pixelLine = document.createElement('div');
      pixelBox.appendChild(pixelLine);
      pixelLine.className = 'pixel';
      }
    }
}
createPixelsSize (5)

window.onload = () => {
  const firstSelectedColor = document.getElementById ('black-selector');
  firstSelectedColor.classList = ('color selected')
}

function colorSelection() {
  const tableColor = document.querySelector('#color-palette');
  tableColor.addEventListener('click', (event) => {
    const actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    const elementSelected = event.target;
    elementSelected.classList = 'color selected';
  });
}
colorSelection()

function printingPixels(printBox) {
  const pixelSelected = printBox;
  switch (document.querySelector('.selected').id) {
  case 'black-selector':
    pixelSelected.style.backgroundColor = 'black';
    break;
  case 'red-selector':
    pixelSelected.style.backgroundColor = 'red';
    break;
  case 'blue-selector':
    pixelSelected.style.backgroundColor = 'rgb(0, 76, 175)';
    break;
  case 'green-selector':
    pixelSelected.style.backgroundColor = 'green';
    break;
  default:
  }
}


function selectPixel () {
  pixelBoard.addEventListener ('click', (event) => {
    const boxTarget = event.target;
    if (boxTarget.id !== 'pixel-board') {
      printingPixels(boxTarget);
    }
  });
}

selectPixel();

function choiceSizeOfPixelBox() {
  const input = document.getElementById('board-size');
  const rstBtn = document.getElementById('generate-board');
  rstBtn.addEventListener('click', () => {
    const pixelBoard = document.getElementById('pixel-board');
    if (input.value === '') {
      alert('Board Inválido!');
    } else if (input.value < 5) {
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    }
    pixelBoard.innerHTML = '';
    createPixelsSize(input.value);
  });
}

choiceSizeOfPixelBox();

function resetColorsButton() {
  const resetButton = document.createElement('button');
  const interfaceHtml = document.getElementById('userPainel');
  interfaceHtml.appendChild(resetButton);
  resetButton.innerHTML = 'Limpar';
  resetButton.id = 'clear-board';
  resetButton.addEventListener('click', () => {
    const color = document.getElementsByClassName('pixel');
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = 'white';
    }
  });
}
resetColorsButton();