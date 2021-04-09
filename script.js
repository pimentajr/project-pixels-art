window.onload = function {

}

//cria uma div quadrada e a retorna
function createSquare() {
  let square = document.createElement('div');
  square.className = 'color pixel';
  return square;
}

//cria uma linha de quadrados
function createLineSquares(square, lineLength) {
  let squares = [];
  let line = document.createElement('div');
  square.className = 'container';
  let pixelBoard = document.getElementById('pixel-board')
  for (let index = 0; index < lineLength; index++) {
    squares[index] = square;

  }
}