// Requisito 3 - Criação da cor de paleta preta na primeira posição
function addBlackColor() {
  const firstColor = document.querySelector('.color');
  firstColor.style.backgroundColor = 'black';
}
addBlackColor();

// Requisito 4 - Criação do Pixel Board
// 5 linhas div com 5 divs dentro - inline
function createBoard(number) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < number; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'boardline';
    pixelBoard.appendChild(lines);
    for (let index2 = 0; index2 < number; index2 += 1) {
      const pixelItem = document.createElement('div');
      pixelItem.className = 'pixel';
      lines.appendChild(pixelItem);
    }
  }
}
createBoard(5);

// Requisito 6 - Atribui selected inicial
function initialBlack() {
  const initialColor = document.querySelector('.color');
  initialColor.classList.add('selected');
}
initialBlack();

//Requisito 7 - mudança de pincel de acordo com o click (addEventListener)
const theColors = document.querySelector('#color-palette');
function clickSelector() {
  theColors.addEventListener('click', function(selectedColor) {
    const eventTarget = selectedColor.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
}
clickSelector();
