let black = document.getElementById('black');
black.classList.add('selected');

let pixelBoard = document.getElementById('pixel-board');

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
    return colorPalette;
  }
}

// Seleciona uma cor no palette.
let colorPalette = document.getElementsByClassName('color');
for (let colorIndex = 0; colorIndex < colorPalette.length; colorIndex += 1) {
  let colorSelected = colorPalette[colorIndex];
  colorSelected.addEventListener('click', function () {
    SelectRemotion();
    colorSelected.classList.add('selected');
  });
}

// Pinta um pixel ao ser clicado.
function PixelColor() {
  let pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    let pixel = pixelBoard[index];
    pixel.addEventListener('click', function() {
      pixel.style.backgroundColor = document.getElementsByClassName('selected').style.backgroundColor;
    });
  }
}

function clearPixels(pixelBoard) {
  let pixelBoard = document.getElementById('pixel-board');
  for (let index2 = 0; index2 < pixelBoard.length; index2 += 1) {
    pixelBoard[index2].style.backgroundColor = 'white';
  }
}

function clearButton () {
  let button = document.getElementsByTagName('button');
  button.addEventListener('click', clearPixels);
}
