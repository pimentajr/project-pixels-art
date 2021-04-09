window.onload = function() {
  createLineSquares(5);
  const colorPaletteId = document.getElementById('color-palette');
  
  colorPaletteId.addEventListener('click', function(event) {
    let selectedElement = document.querySelector('.selected');
    if(event.target.classList[0] === 'color') {
      selectedElement.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function(event) {
    let selectedElement = document.querySelector('.selected');
    let color = selectedElement.classList[1];
    if(event.target.classList[0] === 'pixel') {
      event.target.className = 'pixel color';
      event.target.classList.add(`${color}`);
    }
  });
  const clearPixelBoard = document.getElementById('clear-board');
  clearPixelBoard.addEventListener('click', clearBoard);
}

//cria uma linha de quadrados
function createLineSquares(lineLength) {
  let pixelBoard = document.getElementById('pixel-board');
  for (let lineIndex = 0; lineIndex < lineLength; lineIndex += 1) {
    let squares = [];
    let lines = [];
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

function clearBoard() {
  let board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index++) {
    board[index].className = 'pixel color';
  }
}