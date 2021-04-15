function getBlack() {
  const blackId = document.getElementById('black');
  const blackColor = window.getComputedStyle(blackId).backgroundColor;
  blackId.classList.add('selected');
  sessionStorage.setItem('color', blackColor);
}
getBlack();

// Pinta de branco todos os pixels.
function clearPixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index2 = 0; index2 < pixels.length; index2 += 1) {
    pixels[index2].style.backgroundColor = 'white';
  }
}

// Ao clicar no botão 'Limpar', executa a função 'clearPixels'.
function clearButton() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearPixels);
}
clearButton();

// Cria um quadro de pixels. Baseado no código e na explicação dada por Jean Esteves. Perfil: https://github.com/jeansantest Código: https://github.com/tryber/sd-011-project-pixels-art/pull/6/files
function createPixels(number) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < number; index += 1) {
    const pixelLine = document.createElement('div');
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 0; index2 < number; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
  }
}
createPixels(5);

// Remove o quadro de pixels.
function removeBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const counter = pixelBoard.childElementCount;
  for (let index = 0; index < counter; index += 1) {
    const pixelLine = pixelBoard.firstElementChild;
    pixelLine.remove();
  }
}

// Estabelece o valor min e máx do input.
function inputBox() {
  const input = document.querySelector('#board-size');
  if (input.value !== '' && input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
}
inputBox();

// Altera o quadro de pixels de acordo com o input.
function changePixelBoard() {
  const input = document.querySelector('#board-size');
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    inputBox();
    removeBoard();
    createPixels(input.value);
  }
}

// Ao clicar no botão, altera o quadro de pixels de acordo com o input.
const generateButton = document.getElementById('generate-board');
generateButton.addEventListener('click', changePixelBoard);

// Remove a seleção de uma cor.
function SelectRemotion() {
  const palette = document.getElementsByClassName('color');
  for (let colorIndex = 0; colorIndex < palette.length; colorIndex += 1) {
    palette[colorIndex].classList.remove('selected');
  }
}

// Seleciona uma cor do palete.
function selectColor(event) {
  SelectRemotion();
  const selectedColor = event.target;
  selectedColor.classList.add('selected');
  sessionStorage.setItem('color', window.getComputedStyle(selectedColor).backgroundColor);
}

// Ao clicar, executa a função "selectColor".
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', selectColor);

// Pinta um pixel
function addColor(event) {
  const pixelColored = event.target;
  pixelColored.style.background = sessionStorage.getItem('color');
}

// Ao clicar, executa a função 'addColor' e pinta um pixel.
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', addColor);

// Gera uma paleta de cores aleatórias.
function getColorPalette() {
  for (let index = 1; index <= 3; index += 1) {
    const redGrade = Math.ceil(Math.random() * 255);
    const greenGrade = Math.ceil(Math.random() * 255);
    const blueGrade = Math.ceil(Math.random() * 255);
    const paletteCollor = document.getElementById('color-palette').children[index];
    paletteCollor.style.backgroundColor = `rgb(${redGrade},${greenGrade},${blueGrade})`;
  }
}
getColorPalette();
