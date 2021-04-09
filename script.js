const liColors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const colors = ['black', 'red', 'green', 'blue'];

function makeLiColors(param) {
  const liProperties = param;
  for (let index = 0; index < liColors.length; index += 1) {
    liProperties[index].style.backgroundColor = colors[index];
    liProperties[index].style.border = '1px solid black';
  }
}

function createDivBoard(param) {
  const numberOfTiles = param;
  for (let index = 0; index < numberOfTiles; index += 1) {
    const tile = document.createElement('div');
    tile.classList.add('pixel');
    tile.style.float = 'left';
    tile.style.border = '1px solid black';
    tile.style.backgroundColor = 'white';
    pixelBoard.appendChild(tile);
  }
}

function selectColor() {
  liColors[0].classList.add('selected');
}

const colorsList = document.getElementsByClassName('color');

function lookForSelectedColor(event) {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const selectedColor = document.getElementsByClassName('selected');
console.log(selectedColor);
function paintSingleTile(event) {
  const param = event;
  param.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
}

const pixelList = document.getElementsByClassName('pixel');
function initialize() {
  selectColor();
  makeLiColors(liColors);
  createDivBoard(25);
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener('click', lookForSelectedColor);
  }
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', paintSingleTile);
  }
}

window.onload = initialize;
