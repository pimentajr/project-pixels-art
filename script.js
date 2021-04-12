const MAX_BOARD_SIZE = 50;
const MIN_BOARD_SIZE = 5;

const sectionPixelBoard = document.getElementById('pixel-board');
const colorBlackButton = document.getElementsByClassName('black')[0];
const colorRedButton = document.getElementsByClassName('red')[0];
const colorBlueButton = document.getElementsByClassName('blue')[0];
const colorGreenButton = document.getElementsByClassName('green')[0];
const buttonClear = document.querySelector('#clear-board');

let colorBlackSelected = true;
let colorRedSelected = false;
let colorBlueSelected = false;
let colorGreenSelected = false;

function colorSelectedBlack() {
  if (!colorBlackButton.classList.contains('selected')) {
    colorBlackSelected = true;
    colorRedSelected = false;
    colorBlueSelected = false;
    colorGreenSelected = false;
    colorBlackButton.classList.add('selected');
    colorBlueButton.classList.remove('selected');
    colorGreenButton.classList.remove('selected');
    colorRedButton.classList.remove('selected');
  }
}

function colorSelectedRed() {
  if (!colorRedButton.classList.contains('selected')) {
    colorRedSelected = true;
    colorBlackSelected = false;
    colorBlueSelected = false;
    colorGreenSelected = false;
    colorBlackButton.classList.remove('selected');
    colorBlueButton.classList.remove('selected');
    colorGreenButton.classList.remove('selected');
    colorRedButton.classList.add('selected');
  }
}

function colorSelectedBlue() {
  if (!colorBlueButton.classList.contains('selected')) {
    colorBlueSelected = true;
    colorBlackSelected = false;
    colorRedSelected = false;
    colorGreenSelected = false;
    colorBlackButton.classList.remove('selected');
    colorBlueButton.classList.add('selected');
    colorGreenButton.classList.remove('selected');
    colorRedButton.classList.remove('selected');
  }
}

function colorSelectedGreen() {
  if (!colorGreenButton.classList.contains('selected')) {
    colorGreenSelected = true;
    colorBlackSelected = false;
    colorBlueSelected = false;
    colorRedSelected = false;
    colorBlackButton.classList.remove('selected');
    colorBlueButton.classList.remove('selected');
    colorGreenButton.classList.add('selected');
    colorRedButton.classList.remove('selected');
  }
}

function backgroundColorDefine(boolean1, boolean2, boolean3, boolean4) {
  if (boolean1) {
    return 'black';
  }
  if (boolean2) {
    return 'red';
  }
  if (boolean3) {
    return 'blue';
  }
  if (boolean4) {
    return 'green';
  }
}

function paintPixelWithSelectedColor(event) {
  const pixelEvent = event;
  pixelEvent.target.style.backgroundColor = backgroundColorDefine(
    colorBlackSelected,
    colorRedSelected,
    colorBlueSelected,
    colorGreenSelected,
  );
}

function removePixelBoard() {
  const sectionPixelBoardColumn = document.querySelectorAll('.column');
  if (
    sectionPixelBoardColumn[0] === 0 || sectionPixelBoardColumn[0] === undefined
  ) {
    return;
  }
  for (let index = 0; index < sectionPixelBoardColumn.length; index += 1) {
    sectionPixelBoard.removeChild(sectionPixelBoardColumn[index]);
  }
}

function pixelBoard(boardSize) {
  removePixelBoard();
  for (let index = 0; index < boardSize; index += 1) {
    const sectionPixelBoardChild = document.createElement('section');
    sectionPixelBoard.appendChild(sectionPixelBoardChild);
    sectionPixelBoardChild.className = 'column';
    for (let indexJ = 0; indexJ < boardSize; indexJ += 1) {
      const divPixelBoard = document.createElement('div');
      sectionPixelBoardChild.appendChild(divPixelBoard);
      divPixelBoard.className = 'pixel';
      divPixelBoard.addEventListener('click', paintPixelWithSelectedColor);
    }
  }
}

function createPixelBoard(boardSize) {
  const errorMessage = 'Board inválido!';
  let newPixel = boardSize;
  if (boardSize === undefined) {
    alert(errorMessage);
    return;
  }
  if (boardSize < MIN_BOARD_SIZE) {
    alert(errorMessage);
    newPixel = MIN_BOARD_SIZE;
  } else if (boardSize > MAX_BOARD_SIZE) {
    alert(errorMessage);
    newPixel = MAX_BOARD_SIZE;
  }

  pixelBoard(newPixel);
}
function startBoard() {
  const boardSize = document.querySelector('#board-size').value;
  createPixelBoard(boardSize);
}
window.onload = startBoard;

function clear() {
  colorBlackSelected = true;
  colorBlackButton.classList.add('selected');
  colorBlueButton.classList.remove('selected');
  colorGreenButton.classList.remove('selected');
  colorRedButton.classList.remove('selected');
  const divsPrixelsBord = document.querySelectorAll('.pixel');
  for (let index = 0; index < divsPrixelsBord.length; index += 1) {
    divsPrixelsBord[index].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clear);
