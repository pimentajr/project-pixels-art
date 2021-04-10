// Retrieve elements
const liColors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const colors = ['black', 'red', 'green', 'blue'];
const colorsList = document.getElementsByClassName('color');
const selectedColor = document.getElementsByClassName('selected');
let pixelList = document.getElementsByClassName('pixel');
const cleanButton = document.getElementById('clear-board');
const inputNumber = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');
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

// Select black color at start function
function selectColor() {
  liColors[0].classList.add('selected');
}
// ------

// Error return
function errorReturn() {
  window.alert('Board inválido!');
}
// ------

// Calculate board size Function
function boardSizeCalculate(size) {
  const originalSize = size;
  let counter = 0;
  const singleTileSize = 42;
  if (counter === 0) {
    const maxLateralSize = Math.ceil((singleTileSize * 5));
    pixelBoard.style.width = `${maxLateralSize.toString()}px`;
    const minHeightSize = maxLateralSize + 100;
    pixelBoard.style.minHeight = `${minHeightSize.toString()}px`;
    counter += 1;
  } else {
    const maxLateralSize = Math.ceil((singleTileSize * originalSize));
    pixelBoard.style.width = `${maxLateralSize.toString()}px`;
    const minHeightSize = maxLateralSize + 100;
    pixelBoard.style.minHeight = `${minHeightSize.toString()}px`;
  }
  updateTileListEventListener();
}

// function of events
function generateDynamicBoard() {
  const size = inputNumber.value;
  const tileNumber = size ** 2;
  if (size < 1 || size > 50) {
    return errorReturn();
  }
  createDivBoard(tileNumber);
  boardSizeCalculate(size);
}

function lookForSelectedColor(event) {
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function paintSingleTile(event) {
  const tile = event;
  tile.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
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
  pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', paintSingleTile);
  }
  cleanButton.addEventListener('click', cleanBoard);
  generateButton.addEventListener('click', generateDynamicBoard);
}

// Update Function
function updateTileListEventListener() {
  pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', paintSingleTile);
  }
}
// ------

function initialize() {
  selectColor();
  makeLiColors(liColors);
  createEventListeners();
  createDivBoard(25);
  boardSizeCalculate(25);
}

window.onload = initialize;
