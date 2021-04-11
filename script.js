function getBlack() {
  let black = document.getElementById('black');
  let blackColor = window.getComputedStyle(black).backgroundColor;
  black.classList.add('selected');
  sessionStorage.setItem('color', blackColor);
}
getBlack();

let pixelBoard = document.getElementById('pixel-board');

// Cria um quadro de pixels.
for (let index = 0; index < 25; index += 1) {
  let pixel = document.createElement('div');
  pixelBoard.appendChild(pixel);
  pixel.className = 'pixel';
}

// Remove a classe 'seleção' de uma cor.
function SelectRemotion() {
  let palette = document.getElementsByClassName('color');
  for (let colorIndex = 0; colorIndex < palette.length; colorIndex += 1) {
    palette[colorIndex].classList.remove('selected');
  }
}
function selectColor (event) {
  SelectRemotion();
  let selectedColor = event.target;
  selectedColor.classList.add('selected');
  sessionStorage.setItem('color', window.getComputedStyle(selectedColor).backgroundColor);
}

// Ao clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
const palette = document.getElementsByClassName('color');
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', selectColor);

// Pinta um pixel ao ser clicado.
pixelBoard.addEventListener('click', function (event) {
  let pixelColored = event.target;
  pixelColored.style.background = sessionStorage.getItem('color');
});

// Pinta de branco todos os pixels.
function clearPixels() {
  let pixels = document.getElementsByClassName('pixel');
  for (let index2 = 0; index2 < pixels.length; index2 += 1) {
    pixels[index2].style.backgroundColor = 'white';
  }
}

// Clique no botão
function clearButton() {
  let button = document.getElementById('clear-board');
  button.addEventListener('click', clearPixels);
}
clearButton()