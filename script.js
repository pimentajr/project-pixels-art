const getBody = document.body;
const makeTable = document.createElement('table');
getBody.appendChild(makeTable);
makeTable.id = 'pixel-board';
makeTable.className = 'center table';
let numberLines = 5;

function makeColor() {
  const cor1 = (Math.ceil(Math.random() * 255));
  const cor2 = (Math.ceil(Math.random() * 255));
  const cor3 = (Math.ceil(Math.random() * 255));
  return `rgb(${cor1}, ${cor2}, ${cor3})`;
}

const classCor1 = document.querySelector('#cor1');
const classCor2 = document.querySelector('#cor2');
const classCor3 = document.querySelector('#cor3');

classCor1.style.backgroundColor = makeColor();
classCor2.style.backgroundColor = makeColor();
classCor3.style.backgroundColor = makeColor();

function makeTables() {
  for (let index = 0; index < numberLines; index += 1) {
    const makeTr = document.createElement('tr');
    makeTable.appendChild(makeTr);
    makeTr.className = 'center';
    for (let jndex = 0; jndex < numberLines; jndex += 1) {
      const makeTd = document.createElement('td');
      makeTr.appendChild(makeTd);
      makeTd.className = 'pixel';
      makeTd.style.backgroundColor = 'white';
    }
  }
}

makeTables();

function alteraTamanhoTable() {
  numberLines = document.querySelector('#board-size').value;
  const pixelBoard = document.querySelector('#pixel-board');
  if (numberLines.length === 0) {
    window.alert('Board inválido!');
    numberLines = 5;
  } else if (numberLines < 5) {
    numberLines = 5;
  } else if (numberLines > 50) {
    numberLines = 50;
  }
  pixelBoard.innerHTML = '';
  makeTables();
}

const AddSquareButton = document.querySelector('#generate-board');
AddSquareButton.addEventListener('click', alteraTamanhoTable);

function initBlack() {
  const divBlack = document.querySelector('.preto');
  divBlack.classList.add('selected');
}

initBlack();

function trocarSelected(event) {
  const paletaCores = document.querySelectorAll('.selected');
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', trocarSelected);

function tintTable(event) {
  const color = document.querySelector('.selected');
  const colorSelected = getComputedStyle(color).backgroundColor;
  const evento = event.target;
  evento.style.backgroundColor = colorSelected;
}

const table = document.querySelector('#pixel-board');
table.addEventListener('click', tintTable);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);

// npm run lint
// npm run lint:styles
