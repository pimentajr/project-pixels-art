window.onload = createBoard;

function createBoard() {
  let boardHeight = 5;
  let boardWidth = 5;
  let board = document.getElementById('pixel-board');
  for (let index = 1; index <= (boardHeight * boardWidth); index += 1) {
    let square = document.createElement('div');
    square.classList.add('pixel');
    board.appendChild(square);
  }
}
const colorBox = document.querySelectorAll('.color');
for (let elem of colorBox) {
elem.addEventListener('click', selectColor);
}

function selectColor(origin) {
  alert(origin.target);
}
