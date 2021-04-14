const button = document.getElementById('clear-board');

function colors() {
  return Math.floor(Math.random() * 256);
}
colors();

function createColors() {
  const sectionBoxColors = document.querySelector('#color-palette');
  const firstDiv = document.querySelector('#color-palette').firstElementChild;
  for (let index = 0; index < 4; index += 1) {
    const arrayColors = ['rgb(' + colors() + "," + colors() + "," + colors() + ')'];
    const createBoxColors = document.createElement('div');
    sectionBoxColors.appendChild(createBoxColors);
    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = arrayColors[0];
  }
}
createColors();

const table = document.querySelector('#pixel-board');
function createTable(numberRows, unityNumbers) {
  for (let index = 0; index < numberRows; index += 1) {
    const createLine = document.createElement('tr');
    createLine.className = 'row';
    table.appendChild(createLine);

    for (let count = 0; count < unityNumbers; count += 1) {
      const createUnityPixel = document.createElement('th');
      createUnityPixel.className = 'pixel';
      createUnityPixel.style.backgroundColor = 'white';
      createLine.appendChild(createUnityPixel);
    }
  }
}
createTable(5, 5);

function inicitalColor() {
  document.querySelector('#color-palette').firstElementChild.className = 'color selected';
  document.querySelector('#color-palette').firstElementChild.style.backgroundColor = 'black';
}
inicitalColor();

function changeSelectedColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addOrRemoveClass() {
  const addOrRemove = document.querySelectorAll('.color');
  for (let index = 0; index < addOrRemove.length; index += 1) {
    const item = addOrRemove[index];
    item.addEventListener('click', changeSelectedColor);
  }
}
addOrRemoveClass();

function getSelectedColor(event) {
  const colorSelect = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = colorSelect;
}

function changeColorPixel() {
  const selectPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < selectPixel.length; index += 1) {
    const pixel = selectPixel[index];
    pixel.addEventListener('click', getSelectedColor);
  }
}
changeColorPixel();

function resetColor() {
  const removeColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < removeColor.length; index += 1) {
    const colorPixel = removeColor[index];
    colorPixel.style.backgroundColor = 'white';
  }
}
button.addEventListener('click', resetColor);

const sizeButton = document.getElementById('generate-board');
const input = document.getElementById('board-size');

function changeSizePixel() {
  const size = document.querySelectorAll('.pixel');
  for (let index = 0; index < size.length; index += 1) {
    const inputSize = input.value;
    const pixel = size[index];
    if (inputSize > 0 && inputSize <= 5) {
      pixel.style.width = 5 + 'px';
      pixel.style.height = 5 + 'px';
    } else if (inputSize >= 50) {
      pixel.style.width = 50 + 'px';
      pixel.style.height = 50 + 'px';
    } else if (inputSize > 5 && inputSize < 50) {
      pixel.style.width = inputSize + 'px';
      pixel.style.height = inputSize + 'px';
    } else {
      alert('Board inválido!');
      inputSize = ' ';
    }
  }
}

sizeButton.addEventListener('click', changeSizePixel);
