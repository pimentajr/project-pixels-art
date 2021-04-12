// Função de cores aleatórias baseadas nos links:
// https://stackoverflow.com/questions/1484506/random-color-generator
// https://pt.stackoverflow.com/questions/348981/como-colocar-valor-da-variavel-javascript-no-css

function colorRandom() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 4; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (color === '#0000' || color === '#ffff') {
    colorRandom();
  }
  return color;
}

function setColor() {
  const root = document.documentElement;
  const secondColor = colorRandom();
  const thirdColor = colorRandom();
  const fourthColor = colorRandom();
  root.style.setProperty('--second-color', secondColor);
  root.style.setProperty('--third-color', thirdColor);
  root.style.setProperty('--fourth-color', fourthColor);
}

function deleteBoard() {
  const newTable = document.querySelectorAll('.line');
  for (let index = 0; index < newTable.length; index += 1) {
    newTable[index].remove();
  }
}

function createElementsForTable(cont) {
  const originTable = document.querySelector('#pixel-board');
  for (let line = 0; line < cont; line += 1) {
    const lineElement = document.createElement('tr');
    lineElement.className = 'line';
    originTable.appendChild(lineElement);
    for (let coluns = 0; coluns < cont; coluns += 1) {
      const originLine = document.getElementsByClassName('line');
      const colunsElement = document.createElement('td');
      colunsElement.className = 'pixel';
      originLine[line].appendChild(colunsElement);
    }
  }
}

function defineBoard() {
  const input = document.querySelector('#board-size');
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    let cont = input.value;
    if (cont > 50) {
      cont = 50;
    } else if (cont < 5) {
      cont = 5;
    }
    input.value = '';
    deleteBoard();
    createElementsForTable(cont);
  }
}

function inputBoard() {
  const originInput = document.querySelector('#containerButton');
  const input = document.createElement('input');
  const submit = document.createElement('button');
  input.type = 'number';
  input.id = 'board-size';
  input.min = '1';
  submit.id = 'generate-board';
  submit.innerText = 'VQV';
  originInput.appendChild(input);
  originInput.appendChild(submit);
  submit.addEventListener('click', defineBoard);
}

function selectColor() {
  const colorPalette = document.querySelector('#color-palette ul');
  function addSelected(event) {
    const colorSelected = event.target;
    for (let index = 0; index < colorPalette.children.length; index += 1) {
      colorPalette.children[index].classList.remove('selected');
    }
    colorSelected.classList.add('selected');
  }
  colorPalette.addEventListener('click', addSelected);
}

function applyColor() {
  const pixelBoard = document.querySelector('#pixel-board');
  function printBoard(event) {
    const colorPrint = document.querySelector('.selected');
    const boxSelected = event.target;
    const color = colorPrint.classList[1];
    if (boxSelected.classList.length >= 2) {
      boxSelected.className = 'pixel';
    }
    boxSelected.classList.add(color);
  }
  pixelBoard.addEventListener('click', printBoard);
}

function clearBoard() {
  const containerButton = document.querySelector('#containerButton');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  containerButton.appendChild(button);

  function clear() {
    const color = document.querySelectorAll('.pixel');
    for (let index = 0; index < color.length; index += 1) {
      color[index].className = 'pixel';
    }
  }
  button.addEventListener('click', clear);
}

setColor();
inputBoard();
selectColor();
applyColor();
clearBoard();
