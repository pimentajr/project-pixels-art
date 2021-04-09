const colorPallet = document.querySelector('#color-palette');

function createColor(array) {
  for (let i = 0; i < array.length; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = array[i];
    colorPallet.appendChild(color);
  }
}
createColor(['black', 'red', 'blue', 'green']);

function createBoard() {
  const board = document.querySelector('#pixel-board');

  for (let row = 0; row < 5; row += 1) {
    const rowLine = document.createElement('div');

    for (let column = 0; column < 5; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      rowLine.appendChild(pixel);
    }
    board.appendChild(rowLine);
  }
}
createBoard();

function blackSelected() {
  const black = document.querySelector('.color');
  if (black.style.backgroundColor === 'black') {
    black.classList.add('selected');
  }
}
blackSelected();
