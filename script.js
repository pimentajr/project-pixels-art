// Setando alguns parâmetros iniciais

const pixelBoard = document.getElementById('pixel-board');
const generateButton = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

// Função para gerar a board inicial

function generateInitialBoard(input) {
  for (let index = 0; index < input; index += 1) {
    const row = document.createElement('div');
    pixelBoard.appendChild(row);
    row.className = 'row';
    row.style.backgroundColor = 'white';
    for (let secondIndex = 0; secondIndex < input; secondIndex += 1) {
      const pixel = document.createElement('div');
      row.appendChild(pixel);
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
    }
  }
}

generateInitialBoard(5);

// Função que implementa o botão de gerar a board de acordo com o número de pixels

generateButton.onclick = function generateBoard() {
  pixelBoard.innerHTML = '';
  let input = boardSize.value;
  if (input === '') alert('Board inválido!');
  if (input < 5) input = 5;
  if (input > 50) input = 50;
  generateInitialBoard(input);
};

// Função para atribuir cores aleatórias à paleta de cores, ideia adaptada de https://stackoverflow.com/questions/1484506/random-color-generator

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let randomColor = '#';
  for (let index = 0; index < 6; index += 1) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

// Atribui as cores à paleta de cores:

const listOfColors = ['black'];
for (let index = 0; index < 3; index += 1) {
  listOfColors.push(getRandomColor());
}

const color = document.getElementsByClassName('color');

for (let index = 0; index < color.length; index += 1) {
  color[index].style.backgroundColor = listOfColors[index];
}

// Atribui a classe 'selected' à cor selecionada

const colorPalette = document.getElementById('color-palette');
colorPalette.onclick = function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorAux = selectedColor;
  if (selectedColor) colorAux.classList.remove('selected');
  event.target.classList.add('selected');
};

// Função para pintar os pixels da board

pixelBoard.onclick = function paint(e) {
  const selectedColor = document.querySelector('.selected');
  if (e.target.className === 'pixel') {
    e.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
};

// Função para limpar a board

const pixel = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');

clearButton.onclick = function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};
