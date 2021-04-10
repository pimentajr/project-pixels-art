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
let firstColor = document.getElementsByClassName('color')[0];
let secondColor = document.getElementsByClassName('color')[1];
let thirdColor = document.getElementsByClassName('color')[2];
let fourthColor = document.getElementsByClassName('color')[3];

firstColor.addEventListener('click', function () {
  firstColor.classList.add('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
});

secondColor.addEventListener('click', function () {
  secondColor.classList.add('selected');
  firstColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
});

thirdColor.addEventListener('click', function () {
  thirdColor.classList.add('selected');
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
});

fourthColor.addEventListener('click', function () {
  firstColor.classList.add('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  firstColor.classList.remove('selected');
});

