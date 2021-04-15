// gerando cores aleatórias
function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}
// Cor aleatória para as 3 cores subsequentes
const pallet = document.querySelectorAll('.genColor');
for (let index = 0; index < pallet.length; index += 1) {
  const tempColor = randomColor();
  pallet[index].style.backgroundColor = tempColor;
}

// Cria o quadro com a largura dinamica.
const board = document.querySelector('#pixel-board');
const squareSide = 5;
const squareSideWidht = `${squareSide * 40 + 50}px`;

board.style.width = squareSideWidht;
for (let index = 0; index < squareSide ** 2; index += 1) {
  const square = document.createElement('div');
  square.style.backgroundColor = 'white';
  square.className = 'pixel box';

  board.appendChild(square);
}

// Define a cor preta como selecionada se nenhuma estiver selecionada
const selected = document.querySelector('.selected');
if (selected === null) {
  const blackSquare = document.querySelector('#black');
  blackSquare.className = 'color box black selected';
}
