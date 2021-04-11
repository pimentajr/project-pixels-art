const pixelBoard = document.querySelector('#pixel-board');
const colorBlack = document.querySelector('.first');
const colorPalette = document.querySelector('#color-palette');
const secondColor = document.querySelector('.second');
const thirdColor = document.querySelector('.third');
const fouthColor = document.querySelector('.fourth');
const clearBoard = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const btnGenerate = document.querySelector('#generate-board');

//  Gera uma cor hexadecimal aleatória
const generateColor = () => {
  return String(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
};

//  Adiciona uma cor aleatória a cada um dos 3 elementos, menos a primeira cor
const randomColor = () => {
  colorBlack.style.backgroundColor = 'black';
  secondColor.style.backgroundColor = generateColor();
  thirdColor.style.backgroundColor = generateColor();
  fouthColor.style.backgroundColor = generateColor();
};
randomColor();

//  Gera o quadro de pixels
const generatePixels = (num) => {
  for (let i = 0; i < num * num; i += 1) {
    if (i % num === 0) {
      const newBreak = document.createElement('br');
      pixelBoard.appendChild(newBreak);
    }
    const newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    pixelBoard.appendChild(newPixel);
  }
};
generatePixels(5);

//  Seleciona a cor black como inicial ao carregar a página
const initialColorSelected = () => {
  colorBlack.classList.add('selected');
};
initialColorSelected();

//  Adiciona a classe selected quando uma cor da paleta for selecionada
colorPalette.addEventListener('click', (event) => {
  const colorSelected = event.target;
  const allColorsSelected = document.querySelectorAll('.selected');
  for (let i of allColorsSelected) {
    i.classList.remove('selected');
  }
  colorSelected.classList.add('selected');
  colorPalette.classList.remove('selected');
});

pixelBoard.addEventListener('click', (event) => {
  const pixelClicked = event.target;
  const color = document.querySelector('.selected').style.backgroundColor;
  pixelClicked.style.backgroundColor = color;
  pixelBoard.style.backgroundColor = '';
});

clearBoard.addEventListener('click', () => {
  const allPixels = document.querySelectorAll('.pixel');
  for (let i of allPixels) {
    i.style.backgroundColor = 'white';
  }
});

const removeToGenerateNewBoard = () => {
  const allBrs = document.querySelectorAll('br');
  const pixels = document.querySelectorAll('.pixel');
  for (let i of pixels) {
    i.remove();
  }
  for (let index of allBrs) {
    index.remove();
  }
};

const verifyInputValue = (value) => {
  return value === ''
    ? alert('Board inválido!')
    : value < 5
    ? (value = 5)
    : value > 50
    ? (value = 50)
    : value;
};

btnGenerate.addEventListener('click', () => {
  removeToGenerateNewBoard();
  const value = input.value;
  generatePixels(verifyInputValue(value));
});
