// Cria uma cor aleatória
function createRandomColor() {
  const colorGenerate = [0];
  for (let index = 0; index < 3; index += 1) {
    colorGenerate[index] = Math.ceil(Math.random() * 255);
  }
  return `rgba(${colorGenerate.join(', ')})`;
}

// inserindo as cores
function colorInsert() {
  const black = document.getElementById('black');
  const blue = document.getElementById('blue');
  const green = document.getElementById('green');
  const red = document.getElementById('red');
  blue.style.backgroundColor = createRandomColor();
  green.style.backgroundColor = createRandomColor();
  red.style.backgroundColor = createRandomColor();
  black.style.backgroundColor = 'black';
  black.classList.add('selected');
}

// cria uma linha de quadrados
function createLineSquares(lineLength, pixelBoard) {
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
      if(index === 0 && lineIndex === 0) {
        squares[index].classList.add("bombwhite");
      } else if (index === lineLength-1 && lineIndex === lineLength-1) {
        squares[index].classList.add("bombblack");
      }
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
function paintPixel(pixelBoard) {
  pixelBoard.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    const color = selectedElement.style.backgroundColor;
    if (event.target.classList[0] === 'pixel') {
      const selectedEvent = event.target;
      selectedEvent.style.backgroundColor = color;
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
  for (let index = 0; index < pixelP.childElementCount;) {
    pixelP.removeChild(pixelP.childNodes[0]);
  }
}

// Função que define o tamanho do board
function lengthBoard(pixelBoard) {
  const boardSize = document.getElementById('board-size');
  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', () => {
    if (!boardSize.value) {
      alert('Board inválido!');
    } else {
      if (boardSize.value < 5) {
        boardSize.value = 5;
      } else if (boardSize.value > 50) {
        boardSize.value = 50;
      }
      clearLines();
      createLineSquares(boardSize.value, pixelBoard);
    }
  });
}

// eslint-disable-next-line func-names
window.onload = () => {
  const pixelBoard = document.getElementById('pixel-board');
  colorInsert();
  createLineSquares(5, pixelBoard);
  selectColor();
  paintPixel(pixelBoard);
  lengthBoard(pixelBoard);
  const clearPixelBoard = document.getElementById('clear-board');
  clearPixelBoard.addEventListener('click', clearBoard);
};
