const colorPalette = document.getElementById('color-palette');
const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].style.backgroundColor = 'white';
}

const color = document.getElementsByClassName('color');
const listOfColors = ['black', 'orange', 'yellow', 'red'];
for (let index = 0; index < color.length; index += 1) {
  color[index].style.backgroundColor = listOfColors[index];
}

colorPalette.onclick = function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorAux = selectedColor;
  if (selectedColor) colorAux.classList.remove('selected');
  event.target.classList.add('selected');
};

const pixelBoard = document.getElementById('pixel-board');

pixelBoard.onclick = function paint(e) {
  const selectedColor = document.querySelector('.selected');
  e.target.style.backgroundColor = selectedColor.style.backgroundColor;
};

const clearButton = document.getElementById('clear-board');

clearButton.onclick = function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};
