// gerando cores aleatórias
function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

const pallet = document.querySelectorAll('.genColor');
for (let index = 0; index < pallet.length; index += 1) {
  const tempColor = randomColor();
  pallet[index].style.backgroundColor = tempColor;
}

const board = document.querySelector('#pixel-board');
const squareSide = 5;
let squareSideWidht = `${squareSide * 40 + 50}px`;

board.style.width = squareSideWidht;
for (let index = 0; index < squareSide ** 2; index += 1) {
  const square = document.createElement('div');
  square.style.backgroundColor = 'white';
  square.className = 'pixel box';

  board.appendChild(square);
}
