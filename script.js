const getBody = document.body;
const makeTable = document.createElement('table');
getBody.appendChild(makeTable);
makeTable.id = 'pixel-board';
makeTable.className = 'center table';
let numberLines = 5;

function makeTables() {
  for (let index = 0; index < numberLines; index += 1) {
    const makeTr = document.createElement('tr');
    makeTable.appendChild(makeTr);
    makeTr.className = 'center';
    for (let jndex = 0; jndex < numberLines; jndex += 1) {
      const makeTd = document.createElement('td');
      makeTr.appendChild(makeTd);
      makeTd.className = 'pixel branco';
    }
  }
}

makeTables();

function alteraTamanhoTable() {
  numberLines = document.querySelector('#board-size').value;
  const pixelBoard = document.querySelector('#pixel-board');
  if (numberLines.length === 0) {
    window.alert('Board inválido!');
  } else if (numberLines > 4 && numberLines < 51) {
    pixelBoard.innerHTML = '';
    makeTables();
  }
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
  const colorSelected = window.getComputedStyle(color, null).getPropertyValue('background-color');
  if (colorSelected === 'rgb(0, 0, 0)') {
    event.target.classList.remove('branco', 'verde', 'vermelho', 'amarelo');
    event.target.classList.add('preto');
  } else if (colorSelected === 'rgb(0, 128, 0)') {
    event.target.classList.remove('branco', 'preto', 'vermelho', 'amarelo');
    event.target.classList.add('verde');
  } else if (colorSelected === 'rgb(255, 0, 0)') {
    event.target.classList.remove('branco', 'preto', 'verde', 'amarelo');
    event.target.classList.add('vermelho');
  } else {
    event.target.classList.remove('branco', 'preto', 'verde', 'vermelho');
    event.target.classList.add('amarelo');
  }
}

const table = document.querySelector('#pixel-board');
table.addEventListener('click', tintTable);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove('branco', 'preto', 'verde', 'vermelho', 'amarelo');
    pixels[index].classList.add('branco');
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);

// npm run lint
// npm run lint:styles
