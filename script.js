// cria uma linha de quadrados
function createLineSquares(lineLength) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let lineIndex = 0; lineIndex < lineLength; lineIndex += 1) {
    const squares = [];
    const lines = [];
    lines[lineIndex] = document.createElement('div');
    lines[lineIndex].className = 'container';
    pixelBoard.appendChild(lines[lineIndex]);
    for (let index = 0; index < lineLength; index += 1) {
      squares[index] = document.createElement('div');
      squares[index].className = 'pixel color';
      lines[lineIndex].appendChild(squares[index]);
    }
  }
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
    const color = selectedElement.classList[1];
    if (event.target.classList[0] === 'pixel') {
      event.target.className = 'pixel';
      event.target.classList.add(`${color}`);
    }
  });
}

// cria uma função que limpa o board
function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].className = 'pixel color';
  }
}

window.onload = function () {
  createLineSquares(5);
  selectColor();
  paintPixel();
  const clearPixelBoard = document.getElementById('clear-board');
  clearPixelBoard.addEventListener('click', clearBoard);
};
