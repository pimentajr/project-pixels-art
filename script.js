const board = document.querySelector('#pixel-board');
const x = 5;
const y = 5;

for (let index = 0; index < x * y; index += 1) {
  const square = document.createElement('div');
  square.style.backgroundColor = 'white';
  square.className = 'pixel box';

  board.appendChild(square);
}
