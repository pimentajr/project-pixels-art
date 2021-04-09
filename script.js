const colorPalette = document.getElementById('color-palette');

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
