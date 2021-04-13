/** Finaliza requisito 6, adicionando preto como selected. */
window.onload = function addSelect() {
  document.querySelector('.black').classList.add('selected');
};

let lineWidth = 5;
/** Modelo de random colors, consultado em Wallace Maxters.
* Source: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */
const red = document.querySelector('.red');
const blue = document.querySelector('.purple');
const green = document.querySelector('.green');

function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
}

red.style.backgroundColor = randomColor();
blue.style.backgroundColor = randomColor();
green.style.backgroundColor = randomColor();

/** Essa função foi retirada do código de Alberto Candido com a devida permissão.
 * O que basicamente este código faz é remover todos os pixels para que novos sejam criados */

function cleanBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const linesSquare = document.querySelectorAll('.line');
  for (let index = 0; index < linesSquare.length; index += 1) {
    pixelBoard.removeChild(linesSquare[index]);
  }
}

function createPixels() {
  const pixelLine = document.getElementsByClassName('line');
  for (let index = 0; index < pixelLine.length; index += 1) {
    for (let pixels = 0; pixels < pixelLine.length; pixels += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel', 'white');
      pixelLine[pixels].appendChild(createPixel);
    }
  }
}

/** Cria as linhas para alocação dos 5 quadrados de cores por linha. */
function createLine() {
  cleanBoard();
  const newLine = lineWidth;
  const pixelTable = document.getElementById('pixel-board');
  for (let index = 0; index < newLine; index += 1) {
    const lines = document.createElement('div');
    lines.classList.add('line');
    pixelTable.appendChild(lines);
  }
  createPixels();
}
createLine();

/**  Requisito 07 | Me baseei no código do alberto para entender melhor a questão.
 * Cria os píxeis e os joga dentro da div criado na função anterior, que tem a classe ".line"
 * Também foi consultada uma discussão no fórum StackOverFlow acerca de como fazer tabelas
 * utilizando estilização no CSS.
 * Source: https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
*/

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

/** Requisito 08 | Consulsei W3Schools sobre o "window.getComputedStyle()" para realizar o desafio.
 * Source: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp */
function myFunction(event) {
  const selColor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const x = event.target;
  x.style.backgroundColor = selColor;
  console.log(selColor);
}

function addColor() {
  const toColorize = document.getElementById('pixel-board');
  toColorize.addEventListener('click', myFunction);
}
addColor();

/** Requisito 09 | Cria um botão limpar que deixa todos os pixels brancos */
function clearBoard() {
  const paintBoart = document.getElementsByClassName('pixel');
  for (let clear = 0; clear < paintBoart.length; clear += 1) {
    paintBoart[clear].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', clearBoard);

/** Requisitos 10 e 11 | Implementa botão input e funcionalidades de limitação 5:50 */
function receiveValue() {
  const input = document.getElementById('board-size');
  const button = document.getElementById('generate-board');
  button.addEventListener('click', () => {
    const newVal = input.value;
    if (newVal === '') {
      alert('Board inválido!');
    } else if (newVal < 5) {
      lineWidth = 5;
      createLine();
    } else if (newVal > 50) {
      lineWidth = 50;
      createLine();
    } else {
      lineWidth = input.value;
      createLine();
    }
  });
}
receiveValue();
