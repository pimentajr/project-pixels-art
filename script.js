window.onload = function() {
  createLineSquares(5);
}

//cria uma linha de quadrados
function createLineSquares(lineLength) {
  let pixelBoard = document.getElementById('pixel-board');
  let squares = [];
  let line = document.createElement('div');
  line.className = 'container';
  pixelBoard.appendChild(line);
  for (let index = 0; index < lineLength; index += 1) {
    squares[index] = document.createElement('div');
    squares[index].className = 'color pixel';
    line.appendChild(squares[index]);
  }
}
