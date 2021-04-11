
window.onload = function() {
  let black = document.getElementById('black');
  let blackColor = black.style.backgroundColor;
  black.classList.add('selected');
  sessionStorage.setItem('color', blackColor);
}

let pixelBoard = document.getElementById('pixel-board');

// Cria um quadro de pixels.
for (let index = 0; index < 25; index += 1) {
  let pixel = document.createElement('div');
  pixelBoard.appendChild(pixel);
  pixel.className = 'pixel';
}

// Remove a classe 'seleção' de uma cor.
function SelectRemotion() {
  let colorPalette = document.getElementsByClassName('color');
  for (let colorIndex = 0; colorIndex < colorPalette.length; colorIndex += 1) {
    colorPalette[colorIndex].classList.remove('selected');
  }
}

// Seleciona uma cor no palette.
let colorPalette = document.getElementsByClassName('color');
for (let colorIndex = 0; colorIndex < colorPalette.length; colorIndex += 1) {
  let colorClicked = colorPalette[colorIndex];
  colorClicked.addEventListener('click', function () {
    SelectRemotion();
    colorClicked.classList.add('selected');
    sessionStorage.setItem('color', colorSelected.style.backgroundColor);
  });
}

// Pinta um pixel ao ser clicado.
function PixelColor() {
  for (let index = 0; index < pixelBoard.length; index += 1) {
    let pixel = pixelBoard[index];
    pixel.addEventListener('click', function() {
      pixel.style.backgroundColor = sessionStorage.getItem('color');
    });
  }
}

// Pinta de branco todos os pixels.
function clearPixels(pixelBoard) {
  for (let index2 = 0; index2 < pixelBoard.length; index2 += 1) {
    pixelBoard[index2].style.backgroundColor = 'white';
  }
}

// Clique no botão
function clearButton () {
  let button = document.getElementsByTagName('button');
  button.addEventListener('click', clearPixels);
}
