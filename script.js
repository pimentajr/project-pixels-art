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

// Requisito 7 - mudança de pincel de acordo com o click (addEventListener)
const firstColor = document.getElementsByClassName('color')[0];
const secondColor = document.getElementsByClassName('color')[1];
const thirdColor = document.getElementsByClassName('color')[2];
const fourthColor = document.getElementsByClassName('color')[3];

firstColor.addEventListener('click', () => {
  firstColor.classList.add('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
});

secondColor.addEventListener('click', () => {
  secondColor.classList.add('selected');
  firstColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
  secondColor.style.backgroundColor = 'yellow';
});

thirdColor.addEventListener('click', () => {
  thirdColor.classList.add('selected');
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
  thirdColor.style.backgroundColor = 'red';
});

fourthColor.addEventListener('click', () => {
  fourthColor.classList.add('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  firstColor.classList.remove('selected');
  fourthColor.style.backgroundColor = 'blue';
});

// Requisito 8 - Colore o pixel individual
function coloredPixel() {
  const allBoard = document.querySelector('#pixel-board');
  allBoard.addEventListener('click', (eventoDeOrigem) => {
    const pincelColor = document.querySelector('.selected').style.backgroundColor;
    const clickedPixel = eventoDeOrigem.target;
    if (clickedPixel.className === 'pixel') {
      clickedPixel.style.backgroundColor = pincelColor;
    }
  });
}
coloredPixel();

// Requisito 9 - Criação do botão
// Adiciona um botão e limpa o grid
function clearBoard() {
  const cleanButton = document.getElementById('clear-board');
  cleanButton.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
