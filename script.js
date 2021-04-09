const arrayColors = ['aqua', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow', 'magenta', 'salmon'];

function getRandomColors(colors) {
  const randomColor = colors[Math.floor((Math.random() * colors.length))];
  return randomColor;
}

function createMatrix() {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    board.appendChild(line);
    for (let secondIndex = 0; secondIndex < 5; secondIndex += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}

window.onload = function load() {
  const getColors = document.getElementsByClassName('color');
  getColors[0].style.backgroundColor = 'black';
  getColors[0].classList.add('selected');
  let colorRemove;
  for (let index = 1; index < getColors.length; index += 1) {
    colorRemove = getRandomColors(arrayColors);
    getColors[index].style.backgroundColor = colorRemove;
  }
  createMatrix();
};

function setSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function getPaletteColor() {
  const selectColor = document.getElementsByClassName('color');

  for (let index = 0; index < selectColor.length; index += 1) {
    selectColor[index].addEventListener('click', setSelected);
  }  
}
getPaletteColor();
