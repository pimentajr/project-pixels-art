const liColors = document.getElementsByClassName('color');
const pixelSection = document.getElementById('pixel-board');
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
    pixelSection.appendChild(tile);
  }
}

function selectColor() {
  liColors[0].classList.add('selected');
}

function initialize() {
  selectColor();
  makeLiColors(liColors);
  createDivBoard(25);
}

window.onload = initialize;
