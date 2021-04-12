const sectionPixelBoard = document.getElementById('pixel-board');

let colorBlackSelected = true;
let colorRedSelected = false;
let colorBlueSelected = false;
let colorGreenSelected = false;

const colorBlackButton = document.getElementsByClassName('black')[0];
const colorRedButton = document.getElementsByClassName('red')[0];
const colorBlueButton = document.getElementsByClassName('blue')[0];
const colorGreenButton = document.getElementsByClassName('green')[0];
const buttonClear = document.querySelector('#clear-board');

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
onclick = 'clear()';

function paintPixelWithSelectedColor(event) {
  const pixelEvent = event;
  pixelEvent.target.style.backgroundColor = backgroundColorDefine(
    colorBlackSelected,
    colorRedSelected,
    colorBlueSelected,
    colorGreenSelected,
  );
}

function pixelBoard(linha, coluna) {
  for (let index = 0; index < linha; index += 1) {
    const sectionPixelBoardChild = document.createElement('section');
    sectionPixelBoard.appendChild(sectionPixelBoardChild);
    for (let indexJ = 0; indexJ < coluna; indexJ += 1) {
      const divPixelBoard = document.createElement('div');
      sectionPixelBoardChild.appendChild(divPixelBoard);
      divPixelBoard.className = 'pixel';
      divPixelBoard.addEventListener('click', paintPixelWithSelectedColor);
    }
  }
}

pixelBoard(5, 5);

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
