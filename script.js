window.onload = 
let black = document.getElementById('black');
black.classList.add('selected');

let pixelBoard = document.getElementById('pixel-board');

for (let index = 1; index <= 25; index += 1) {
  let pixel = document.createElement('div');
  pixelBoard.appendChild(pixel);
  pixel.className = 'pixel';
}
console.log(pixelBoard);

function SelectRemotion() {
  let colorPalette = document.getElementsByClassName('color');
for (colorIndex = 0; colorIndex <colorPalette.length; colorIndex += 1) {
  colorPalette[colorIndex].classList.remove('selected');
}
}

// Selecionar uma cor
// Ao clicar em uma cor, ela add a classe 'selected' 
let colorPalette = document.getElementsByClassName('color');
for (colorIndex = 0; colorIndex <colorPalette.length; colorIndex += 1) {
  let colorSelected = colorPalette[colorIndex];
  colorSelected.addEventListener('click', ColorSelection() {
    SelectRemotion()
    colorSelected.classList.add('selected');
  }
}
