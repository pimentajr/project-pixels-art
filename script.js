// inserindo as cores
function colorInsert() {
  const black = document.getElementById('black');
  const blue = document.getElementById('blue');
  const green = document.getElementById('green');
  const red = document.getElementById('red');
  black.style.backgroundColor = 'black';
  blue.style.backgroundColor = 'blue';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
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

// 11 - Limite o tamanho mínimo e máximo do board.
// Caso o valor digitado no input board-sze fuja do intervalo de 5 a 50, faça:
// Valor menor que 5, considerar 5 como padrão;
// Valor maior que 50, considerar 50 como padrão.
// O que será verificado:
// Verifica se a altura máxima do board é 50
// Verifica se a altura do board é 5 quando um valor menor é colocado no input
// Verifica se a altura do board é 50 quando um valor maior é colocado no input

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



// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.
// O que será verificado:
// Verifica se as cores geradas na paleta são diferentes a cada carregamento da página
// Verifica se a cor preta ainda está presente e é a primeira na sua paleta de cores
