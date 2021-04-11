//  Finaliza requisito 6, adicionando preto como selected.
window.onload = function addSelect() {
  document.querySelector('.black').classList.add('selected');
};

const lineWidth = 5;

//  Cria o quadro onde ficarão alocados os pixels a serem modificados
function cratePixelBoard() {
  const pixelTables = document.createElement('div');
  pixelTables.id = 'pixel-board';
  document.body.appendChild(pixelTables);
}
cratePixelBoard();

//  Cria as linhas para alocação dos 5 quadrados de cores por linha.

function createLine() {
  const pixelTable = document.getElementById('pixel-board');
  for (let line = 0; line < lineWidth; line += 1) {
    const lines = document.createElement('div');
    lines.classList.add('line');
    pixelTable.appendChild(lines);
  }
}
createLine();
// Cria os píxeis individuais e os joga dentro da div criado na função anterior. Essa div é a linha.
// Para esta questão, obtive ajuda do aluno Alberto Candido para direcionamento do que fazer
// Foi consultado um negócio:
// https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
function createPixels() {
  const pixelLine = document.getElementsByClassName('line');
  for (let index = 0; index < pixelLine.length; index += 1) {
    for (let pixels = 0; pixels < pixelLine.length; pixels += 1) {
      const createPixels = document.createElement('div');
      createPixels.classList.add('pixel', 'white');
      pixelLine[pixels].appendChild(createPixels);
    }
  }
}
createPixels();

//  07 me baseei pelo código do alberto para entender.
function removeClass(event) {
  // Essa linha corrige o 'selected' que iria para a ID #color-palette;
  document.querySelector('#color-palette').classList.remove('selected');
  const deleteClass = document.getElementsByClassName('color');
  for (let index = 0; index < deleteClass.length; index += 1) {
    deleteClass[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectColor() {
  const colorPallete = document.getElementById('color-palette');
  colorPallete.addEventListener('click', removeClass);
}
selectColor();

//  08 para resolver esta questão, foi consultada a informação sobre window.getComputedStyle
//  Source: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
function myFunction(event) {
  const selColor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  event.target.style.backgroundColor = selColor;
  console.log(selColor);
}

function addColor() {
  const toColorize = document.getElementById('pixel-board');
  toColorize.addEventListener('click', myFunction);
}
addColor();

//  09. Cria um botão limpar que deixa todos os pixels brancos;

function clearBoard() {
  const paintBoart = document.getElementsByClassName('pixel');
  for (let clear = 0; clear < paintBoart.length; clear += 1) {
    paintBoart[clear].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', clearBoard);

// 10. Implementa botão, input e funcionalidades

function receiveValue () {
  let input = document.getElementById('border-size');
  let button = document.getElementById('generate-board');

  button.addEventListener
}
