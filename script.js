const button = document.getElementById('clear-board');

function colors() {
  return Math.floor(Math.random() * 256);
}
colors();

function createColors() {
  const sectionBoxColors = document.querySelector('#color-palette');
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
  table.innerHTML = '';
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
  if (input.value >= 1 && input.value  <= 5) {
    input.value  = 5;
  } else if (input.value  >= 50) {
    input.value  = 50;
  } else if (input.value <= 0){
    alert('Board inválido!');
  }
  createTable(input.value, input.value);
}
sizeButton.addEventListener('click', changeSizePixel);
