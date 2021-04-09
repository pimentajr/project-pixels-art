// inserindo as cores
function colorInsert() {
  const black = document.getElementById('black');
  const blue = document.getElementById('blue');
  const green = document.getElementById('green');
  const red = document.getElementById('red');
  let colorGenerate = [];
  let randNumber = [];
  for (const index = 0; index < 3; index += 1) {
    for (const zindex = 0; zindex < 3; zindex += 1) {
      randNumber[zindex] = Math.ceil(Math.random()*255);
    }
    colorGenerate[index] = randNumber;
  }
  blue.style.backgroundColor = 'blue';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  black.style.backgroundColor = 'black';
  black.classList.add('selected');
}

// cria uma linha de quadrados
function createLineSquares(lineLength) {
  const pixelBoard = document.getElementById('pixel-board');
  const squares = [];
  for (let lineIndex = 0; lineIndex < lineLength; lineIndex += 1) {
    const lines = [];
    lines[lineIndex] = document.createElement('div');
    lines[lineIndex].className = 'container';
    pixelBoard.appendChild(lines[lineIndex]);
    for (let index = 0; index < lineLength; index += 1) {
      squares[index] = document.createElement('div');
      squares[index].className = 'pixel';
      squares[index].style.backgroundColor = 'rgba(255, 255, 255)';
      lines[lineIndex].appendChild(squares[index]);
    }
  }
  return squares;
}

// Seleciona uma cor da minha paleta de cores
function selectColor() {
  const colorPaletteId = document.getElementById('color-palette');
  colorPaletteId.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    if (event.target.classList[0] === 'color') {
      selectedElement.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

// Pinta o quadrado selecionado
function paintPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    const color = selectedElement.style.backgroundColor;
    if (event.target.classList[0] === 'pixel') {
      event.target.style.backgroundColor = color;
    }
  });
}

// cria uma função que limpa as cores do board
function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

// Função para limpar todas as linhas
function clearLines() {
  const pixelP = document.getElementById('pixel-board');
  const childLength = pixelP.childElementCount;
  for (let index = 0; index < childLength; index += 1) {
    pixelP.removeChild(pixelP.childNodes[0]);
  }
}

// Função que define o tamanho do board
function lengthBoard() {
  const boardSize = document.getElementById('board-size');
  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', () => {
    if (!boardSize.value) {
      console.log('Board inválido!');
    } else {
      if (boardSize.value < 5) {
        boardSize.value = 5;
      } else if (boardSize.value > 50) {
        boardSize.value = 50;
      }
      clearLines();
      createLineSquares(boardSize.value);
    }
  });
}

// eslint-disable-next-line func-names
window.onload = function () {
  colorInsert();
  createLineSquares(5);
  selectColor();
  paintPixel();
  lengthBoard();
  const clearPixelBoard = document.getElementById('clear-board');
  clearPixelBoard.addEventListener('click', clearBoard);
};
