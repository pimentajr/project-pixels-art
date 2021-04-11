window.onload = function initial() {
  const initialColor = document.querySelector('#black');
  initialColor.className = 'color selected';
};

const colors = ['black', 'red', 'blue', 'green'];
const pixel = 5;
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
let colorSeleted = 'black';
const buttonCleanBoard = document.querySelector('#clear-board');
const buttonSizeBoard = document.querySelector('#generate-board');

// console.log(colorSeleted); // --------------------------------------------------------------seleção cor

function createPalette(colorTitle) {
  for (let index = 0; index < colorTitle.length; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.id = colorTitle[index];
    colorBox.className = 'color';
    colorBox.style.backgroundColor = colorTitle[index];
    colorPalette.appendChild(colorBox);
  }
}

function createPixelLine(numberOfPixelsXY) {
  const lineBox = document.createElement('div');
  lineBox.className = 'lineBox';
  for (let index = 0; index < numberOfPixelsXY; index += 1) {
    const pixelBox = document.createElement('div');
    pixelBox.className = 'pixel';
    lineBox.appendChild(pixelBox);
    pixelBoard.appendChild(lineBox);
    //  console.log(pixelBox);
  }
}

function numberOfLines(lines) {
  for (let index = 0; index < lines; index += 1) {
    createPixelLine(lines);
  }
}

function colorSelection(originEvent) {
  const event = originEvent;
  const boxColor = event.target.id;
  const classColorList = document.querySelectorAll('.color');

  if (boxColor !== 'color-palette') {
    for (let index = 0; index < classColorList.length; index += 1) {
      classColorList[index].className = 'color';
    }
    event.target.className = 'color selected';
  }
  colorSeleted = boxColor;
  console.log(colorSeleted); // -------------------------------------------seleção cor
}

function coloringPixel(originEvent) {
  const event = originEvent;
  const chosenPixel = event.target;
  chosenPixel.style.backgroundColor = colorSeleted;
  // console.log(chosenPixel); // -------------------------------------------seleção cor
}

function clearBoard() {
  const pixelBoxList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoxList.length; index += 1) {
    pixelBoxList[index].style.backgroundColor = 'white';
  }
}

function changeSizeBoard() {
  let boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else {
  boardSize =  checkSizeInput(boardSize);
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  numberOfLines(boardSize);
  }
  console.log(boardSize);
} 


function checkSizeInput (number) { 
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  return number;
}

createPalette(colors);
numberOfLines(pixel);
colorPalette.addEventListener('click', colorSelection);
pixelBoard.addEventListener('click', coloringPixel);
buttonCleanBoard.addEventListener('click', clearBoard);
buttonSizeBoard.addEventListener('click', changeSizeBoard);
