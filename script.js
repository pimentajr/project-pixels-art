function create5PixelDefault(newLinesIndex) {
  for (let index = 0; index < 5; index += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    newPixel.style.marginRight = '4px';
    document.querySelectorAll('.pixel-line')[newLinesIndex].appendChild(newPixel);
  }
}
function createLines(quantity) {
  let newLinesIndex = 5;
  const realQuantity = quantity - newLinesIndex;
  for (let index = 0; index < realQuantity; index += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'pixel-line';
    document.querySelector('#pixel-board').appendChild(newLine);
    create5PixelDefault(newLinesIndex);
    newLinesIndex += 1;
  }
}
function createPixels(quantity) {
  const theLines = document.querySelectorAll('.pixel-line');
  for (let index = 0; index < quantity; index += 1) {
    for (let indexInner = 5; indexInner < quantity; indexInner += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.marginRight = '4px';
      theLines[index].appendChild(newPixel);
    }
  }
}

function defineBoard() {
  const boardSize = document.querySelector('#board-size').value;
  const lineDivs = document.querySelectorAll('.pixel-line')
  for (let index = 5; index < lineDivs.length; index += 1) {
    document.querySelector('#pixel-board').removeChild(lineDivs[5]);
    // document.querySelectorAll('.pixel-line')[]
  }
  createLines(boardSize);
  createPixels(boardSize);
}
let buttonVqv = document.querySelector('#generate-board');
buttonVqv.addEventListener('click', defineBoard);

const pixelColor = document.querySelectorAll('.color');
function setAsSelected(event) {
  const pixelClicked = event;
  document.querySelectorAll('.selected')[0].className = 'color';
  pixelClicked.target.className = 'color selected';
}
for (let index = 0; index < pixelColor.length; index += 1) {
  pixelColor[index].addEventListener('click', setAsSelected);
}

function paintPixel(event) {
  const pixelToChange = event.target;
  pixelToChange.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
}
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
}

function clearPixels() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearPixels);
