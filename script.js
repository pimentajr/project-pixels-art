// Retrieve elements
const liColors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const colors = ['black', 'red', 'green', 'blue'];
const colorsList = document.getElementsByClassName('color');
const selectedColor = document.getElementsByClassName('selected');
const pixelList = document.getElementsByClassName('pixel');

// ------
// Create elements
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

function makeLiColors(param) {
  const liProperties = param;
  for (let index = 0; index < liColors.length; index += 1) {
    liProperties[index].style.backgroundColor = colors[index];
    liProperties[index].style.border = '1px solid black';
  }
}

function createCleanButton() {
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.id = 'clear-board';
  console.log(button);
  pixelBoard.appendChild(button);
}
// ------

// Select function
function selectColor() {
  liColors[0].classList.add('selected');
}
// ------

// function of events
function lookForSelectedColor(event) {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function paintSingleTile(event) {
  const param = event;
  param.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
}

function cleanBoard() {
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

function createEventListeners() {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener('click', lookForSelectedColor);
  }
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', paintSingleTile);
  }
  cleanButton.addEventListener('click', cleanBoard);
}
// ------

function initialize() {
  selectColor();
  makeLiColors(liColors);
  createDivBoard(25);
  createCleanButton();
  const cleanButton = document.getElementById('clear-board');
  createEventListeners();

}

window.onload = initialize;
