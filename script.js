const selectedColorDiv = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const selectedBoardDiv = document.querySelector('#pixel-board');

function createPaletteColorDiv(color) {
  const palletColorDiv = document.createElement('div');
  if (color === 'black') {
    palletColorDiv.className = 'color selected';
  } else {
    palletColorDiv.className = 'color';
  }
  palletColorDiv.style.backgroundColor = color;
  document.querySelector('#color-palette').appendChild(palletColorDiv);
}

function createBoardPixels() {
  const boardPixelsDiv = document.createElement('div');
  boardPixelsDiv.className = 'pixel';
  document.querySelector('#pixel-board').appendChild(boardPixelsDiv);
}

function indexOfNode(element) {
  const index = [].indexOf.call(element.parentNode.childNodes, element);
  return index;
}

function selectedColor(event) {
  const element = event.target;
  const nodeIndex = indexOfNode(element);

  element.className = 'color selected';
  for (let index = 0; index < 4; index += 1) {
    if (index !== nodeIndex) {
      document.querySelectorAll('.color')[index].className = 'color';
    }
  }
}

function paintPixel(event) {
  const element = event.target;
  const selectedElement = document.querySelector('.selected');
  const selectedColorIndex = indexOfNode(selectedElement);

  if (selectedColorIndex === 0) {
    element.style.backgroundColor = 'black';
  } else if (selectedColorIndex === 1) {
    element.style.backgroundColor = 'yellow';
  } else if (selectedColorIndex === 2) {
    element.style.backgroundColor = 'red';
  } else if (selectedColorIndex === 3) {
    element.style.backgroundColor = 'green';
  }
}

createPaletteColorDiv('black');
createPaletteColorDiv('yellow');
createPaletteColorDiv('red');
createPaletteColorDiv('green');

for (let index = 1; index <= 25; index += 1) {
  createBoardPixels();
}

selectedColorDiv.addEventListener('click', selectedColor);

btnClear.addEventListener('click', () => {
  for (let index = 0; index < 25; index += 1) {
    document.querySelectorAll('div.pixel')[index].style.backgroundColor = 'white';
  }
});

selectedBoardDiv.addEventListener('click', paintPixel);
