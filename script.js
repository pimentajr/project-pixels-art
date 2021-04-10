window.onload = function() {
  fillBoard(numberOfLines);
};

let numberOfLines = 5;
let numberOfBox = numberOfLines;
const colorSelected = document.getElementById('black');
const colorMenu = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];
for (let index = 0; index < colors.length; index += 1) {
  const colorSelector = document.createElement('div');
  colorSelector.className = 'color';
  colorSelector.id = colors[index];
  colorSelector.style.backgroundColor = colors[index];
  colorMenu.appendChild(colorSelector);
  if  (colors[index] === 'black') {
    colorSelector.classList.add('selected');
  }
}

const pixelBoard = document.getElementById('pixel-board');
const boxsLine = document.getElementsByClassName('line');

function fillLine(value) {
  for (let index = 0; index < value; index += 1) {
    for (let boxIndex = 0; boxIndex < numberOfBox; boxIndex += 1) {
      let createdBox = document.createElement('div');
      createdBox.className = 'pixel';
      boxsLine[index].appendChild(createdBox);
    }
  }
}

function fillBoard (value) {
  for (let index = 0; index < value; index += 1) {
    let lineBox = document.createElement('div');
    lineBox.className = 'line';
    pixelBoard.appendChild(lineBox);
  }
  fillLine(numberOfBox);
}

let boxColorSelect = document.getElementById('color-palette');
boxColorSelect.addEventListener('click', function(event) {
  if (event.target.className === 'color') {
  let colorUnselected = document.getElementsByClassName('selected');
  colorUnselected[0].className = 'color';
  event.target.classList.add('selected');
  }
})

let board = document.getElementById('pixel-board');
board.addEventListener('click', function(event) {
  if (event.target.className === 'pixel') {
    colorPaint = document.getElementsByClassName('selected');
    event.target.style.backgroundColor = colorPaint[0].id;
  }
})