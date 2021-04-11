let lines = 5;

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

// Cógido inspirado no site:
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
}

red.style.backgroundColor = randomColor();
blue.style.backgroundColor = randomColor();
green.style.backgroundColor = randomColor();

function cleanBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  // pixelBoard.querySelectorAll('.lineSquare').forEach((lineSquare=>{
  //   pixelBoard.removeChild(lineSquare)
  // }))
  const linesSquare = document.querySelectorAll('.lineSquare');
  for (let index = 0; index < linesSquare.length; index += 1) {
    pixelBoard.removeChild(linesSquare[index]);
  }
}

function squareLines(value) {
  cleanBoard();
  const square = document.getElementById('pixel-board');
  for (let index = 1; index <= value; index += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'lineSquare';
    square.appendChild(newLine);
  }
}

squareLines(lines);

function squareColuns() {
  const coluns = document.getElementsByClassName('lineSquare');
  for (let index = 0; index < coluns.length; index += 1) {
    for (let secondIndex = 1; secondIndex <= lines; secondIndex += 1) {
      const newColun = document.createElement('div');
      newColun.className = 'pixel white';
      coluns[index].appendChild(newColun);
    }
  }
}

squareColuns();

// 7

function changeClass(event) {
  const classToRemove = document.getElementsByClassName('color');
  for (let index = 0; index < classToRemove.length; index += 1) {
    classToRemove[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectColor() {
  const selection = document.getElementById('color-palette');
  selection.addEventListener('click', changeClass);
}

selectColor();

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

function myFunction(event) {
  const selColor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const x = event.target;
  x.style.backgroundColor = selColor;
}

function addColor() {
  const toColorize = document.getElementById('pixel-board');
  toColorize.addEventListener('click', myFunction);
}
addColor();

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

function clearAll() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
   pixels[i].style.backgroundColor = 'white';
  }
}

function clearColor() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearAll);
}

clearColor();

// 10 Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

function changeBoardSize() {
  const inputBox = document.querySelector('#board-size');
  const sizeButton = document.getElementById('generate-board');
  sizeButton.addEventListener('click', () => {
    const newValue = inputBox.value;
    if (newValue === '') {
      alert('Board inválido!');
    } else if (newValue < 5) {
      lines = 5;
      squareLines(lines);
    } else if (newValue > 50) {
      lines = 50;
      squareLines(lines);
    } else {
      lines = inputBox.value;
      squareLines(lines);
    }
    squareColuns();
  });
}

changeBoardSize();
