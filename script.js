window.onload
let boardHeight = 5;
let boardWidth = 5;
let board = document.getElementById('pixel-board');
for (let index = 1; index <= (boardHeight * boardWidth); index += 1) {
  let square = document.createElement('div');
  square.classList.add('pixel');
  board.appendChild(square);
}

const colorButton = document.getElementsByClassName('color');

console.log(colorButton);
