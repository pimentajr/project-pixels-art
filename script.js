const sectionPixelBoard = document.getElementById('pixel-board');

let colorBlackSelected = true;
let colorRedSelected = false;
let colorBlueSelected = false;
let colorGreenSelected = false;

const colorBlackButton = document.getElementsByClassName('black')[0];
const colorRedButton = document.getElementsByClassName('red')[0];
const colorBlueButton = document.getElementsByClassName('blue')[0];
const colorGreenButton = document.getElementsByClassName('green')[0];

function pixelBoard(linha, coluna) {
  for (let index = 0; index < linha; index += 1) {
    const sectionPixelBoardChild = document.createElement('section');
    sectionPixelBoard.appendChild(sectionPixelBoardChild);
    for (let indexJ = 0; indexJ < coluna; indexJ += 1) {
      const divPixelBoard = document.createElement('div');
      sectionPixelBoardChild.appendChild(divPixelBoard);
      divPixelBoard.className = 'pixel';
    }
  }
}

function colorSelectedBlack() {
  if (!colorBlackButton.classList.contains('selected')) {
    colorBlackSelected = true;
    colorBlackButton.classList.add('selected');
    colorBlueButton.classList.remove('selected');
    colorGreenButton.classList.remove('selected');
    colorRedButton.classList.remove('selected');
  }
}

function colorSelectedRed() {
  if (!colorRedButton.classList.contains('selected')) {
    colorRedSelected = true;
    colorBlackButton.classList.remove('selected');
    colorBlueButton.classList.remove('selected');
    colorGreenButton.classList.remove('selected');
    colorRedButton.classList.add('selected');
  }
}
function colorSelectedBlue() {
  if (!colorBlueButton.classList.contains('selected')) {
    colorBlueSelected = true;
    colorBlackButton.classList.remove('selected');
    colorBlueButton.classList.add('selected');
    colorGreenButton.classList.remove('selected');
    colorRedButton.classList.remove('selected');
  }
}
function colorSelectedGreen() {
  if (!colorGreenButton.classList.contains('selected')) {
    colorGreenSelected = true;
    colorBlackButton.classList.remove('selected');
    colorBlueButton.classList.remove('selected');
    colorGreenButton.classList.add('selected');
    colorRedButton.classList.remove('selected');
  }
}

pixelBoard(5, 5);
