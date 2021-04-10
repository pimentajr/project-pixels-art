function selectInitialColor() {
  document.getElementById('color-1').className = 'color selected';
}

function setSelectedColor(event) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === event.target) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function pencil(event) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function clearBoard() {
  const boardItems = document.getElementsByClassName('pixel');
  for (let index = 0; index < boardItems.length; index += 1) {
    const element = boardItems[index];
    element.style.backgroundColor = 'white';
  }
}

function pageStarter() {
  selectInitialColor();
  document
    .getElementById('color-palette')
    .addEventListener('click', setSelectedColor);
  document.getElementById('pixel-board').addEventListener('click', pencil);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
}

window.onload = pageStarter;
