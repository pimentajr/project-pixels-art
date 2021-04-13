const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board')

function selectColor(event) {
  const selectedDiv = document.querySelector('.selected');
  selectedDiv.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const colorComputedStyle = window.getComputedStyle(selectedColor);
  //selectedColorComputedStyle - para pegar informações do CSS
  event.target.style.backgroundColor = selectedColorComputedStyle.getPropertyValue('background-color');
}

function selections() {
  colorPalette.addEventListener('click',selectColor);
  pixelBoard.addEventListener('click', paintPixel);
}

selections()