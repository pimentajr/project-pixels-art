// Requisito 3 - Criação da cor de paleta preta na primeira posição
function addBlackColor() {
  const firstColor = document.querySelector('.color');
  firstColor.style.backgroundColor = 'black';
}
addBlackColor();

// Requisito 4 - Criação do Pixel Board
// 5 linhas div com 5 divs dentro - inline

const pixelBoard = document.getElementById('pixel-board');
// Essa constante foi declarada fora do function para ser usada no requisito 11
function createBoard(number) {
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
});

thirdColor.addEventListener('click', () => {
  thirdColor.classList.add('selected');
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  fourthColor.classList.remove('selected');
});

fourthColor.addEventListener('click', () => {
  fourthColor.classList.add('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  firstColor.classList.remove('selected');
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

// Requisito 10 e Requisito 11(colocando padrão de 5 e 50) - Bónus - botão de tamanho do board e restrições para o usuário
function yourBoard() {
  const size = document.querySelector('#board-size');
  const clickVQV = document.getElementById('generate-board');
  clickVQV.addEventListener('click', () => {
    if (size.value === '') {
      alert('Board Inválido!');
    } else if (size.value < 5) {
      size.value = 5;
    } else if (size.value > 50) {
      size.value = 50;
    }
    createBoard(size.value);
    clearBoard();
    pixelBoard.innerHTML = '';
    // Zerar Board antes de construir novo!!!!
    createBoard(size.value);
  });
}
yourBoard();

// Requisito 12 - cores diferentes a cada carregamento de página
function randomColors() {
  const colors = document.querySelectorAll('.color');
  for (let index = 1; index < colors.length; index += 1) {
    const x = Number(Math.floor(Math.random() * 256));
    const y = Number(Math.floor(Math.random() * 256));
    const z = Number(Math.floor(Math.random() * 256));
    // Missing radix - colocar 10 no segundo parametro do parseInt
    // Não se esquecer de transformar valores em inteiros!!!!
    // Referência - sistema de mudança de cores rgb - https://dev.to/devlorenzo/js-random-background-color-change-4pof
    colors[index].style.backgroundColor = `rgb( ${x}, ${y}, ${z} )`;
  }
}
randomColors();
