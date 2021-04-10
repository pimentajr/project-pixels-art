const selectedColorDiv = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const pixelBoard = '#pixel-board';
const selectedBoardDiv = document.querySelector(pixelBoard);
const btnVQV = document.querySelector('#generate-board');

function clearBoardPixels() {
  const fatherChilds = document.querySelector(pixelBoard);
  const fatherLength = fatherChilds.childNodes.length;

  for (let index = 0; index < fatherLength; index += 1) {
    fatherChilds.removeChild(fatherChilds.firstChild);
  }
}

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

function createBoardPixels(value) {
  for (let index = 1; index <= value; index += 1) {
    const boardPixelsDiv = document.createElement('div');
    boardPixelsDiv.className = 'pixel';
    document.querySelector(pixelBoard).appendChild(boardPixelsDiv);
  }
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
  element.style.backgroundColor = selectedElement.style.backgroundColor;
}

function checkInputValue(value) {
  if (value < 5) {
    return 5;
  }

  if (value > 50) {
    return 50;
  }
  return value;
}

function randomColor() {
  const colorCode = parseInt(Math.random() * 0xffffff, 10)
    .toString(16)
    .padStart(6, '0');
  return `#${colorCode}`;
}

createPaletteColorDiv('black');
createPaletteColorDiv(randomColor());
createPaletteColorDiv(randomColor());
createPaletteColorDiv(randomColor());

createBoardPixels(25);

selectedColorDiv.addEventListener('click', selectedColor);

btnClear.addEventListener('click', () => {
  for (let index = 0; index < 25; index += 1) {
    document.querySelectorAll('div.pixel')[index].style.backgroundColor = 'white';
  }
});

selectedBoardDiv.addEventListener('click', paintPixel);

btnVQV.addEventListener('click', () => {
  let inputValue = document.querySelector('#board-size').value;

  if (inputValue === '') {
    alert('Board inválido!');
  } else {
    clearBoardPixels();
    inputValue = checkInputValue(inputValue);
    const valuePow = inputValue ** 2;
    let gridColumns = '';
    for (let index = 0; index < inputValue; index += 1) {
      gridColumns += 'auto ';
    }
    document.querySelector(pixelBoard).style.gridTemplateColumns = gridColumns;
    createBoardPixels(valuePow);
  }
});
