window.onload = function() {
  fillBoard(numberOfLines);
};

let numberOfLines = 5;
const colorSelected = document.getElementById('black');
const colorMenu = document.getElementById('color-palette');
// const colors = ['black', 'red', 'green', 'blue'];
const colors = ['black', 'red', 'green', 'blue', 'aqua', 'magenta', 'royalblue', 'rosybrown', 'greenyellow', 'yellow', 'blueviolet', 'coral', 'darkgray', 'fuchsia', 'grey', 'hotpink']



for (let index = 0; index < 4; index += 1) {
  if (index === 0) {
  const colorSelector = document.createElement('div');
  colorSelector.className = 'color selected';
  colorSelector.id = colors[index];
  colorSelector.style.backgroundColor = colors[index];
  colorMenu.appendChild(colorSelector);
  } else {
    const colorSelector = document.createElement('div');
    colorSelector.className = 'color';
    let randomColor = Math.ceil(Math.random() * 15);
    console.log(randomColor);
    colorSelector.id = colors[randomColor];
    colorSelector.style.backgroundColor = colors[randomColor];
    colorMenu.appendChild(colorSelector);
  }
  // if  (colors[index] === 'black') {
  //   colorSelector.classList.add('selected');
  // }
}

const pixelBoard = document.getElementById('pixel-board');
const boxsLine = document.getElementsByClassName('line');

function fillLine(value) {
  for (let index = 0; index < value; index += 1) {
    for (let boxIndex = 0; boxIndex < value; boxIndex += 1) {
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
  fillLine(value);
}

let boxColorSelect = document.getElementById('color-palette');
boxColorSelect.addEventListener('click', function(event) {
  if (event.target.className === 'color') {
  let colorUnselected = document.getElementsByClassName('selected');
  colorUnselected[0].className = 'color';
  event.target.classList.add('selected');
  }
});

let board = document.getElementById('pixel-board');
board.addEventListener('click', function(event) {
  if (event.target.className === 'pixel') {
    colorPaint = document.getElementsByClassName('selected');
    event.target.style.backgroundColor = colorPaint[0].id;
  }
});

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', cleaningPixels
);

let generateBoardButton = document.getElementById('generate-board');
generateBoardButton.addEventListener('click', generateBoad);

function cleaningPixels() {
  let clearPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixel.length; index += 1) {
    clearPixel[index].style.backgroundColor = 'white';
  }
};

function limitsMaxMin(number) {
  let size;
  if (number < 5) {
    size = 5;
  } else if (number > 50) {
    size = 50;
  } else {
    size = number;
  }
  return size;
  };

function generateBoad() {
  let inputSize = document.getElementById('board-size');
  // console.log(inputSize.value);
  if (inputSize.value === '') {
    alert('Board inválido');
  } else {
    deleteBoard();
    let choiceNumberOfLines = limitsMaxMin(parseInt(inputSize.value,10));
    fillBoard(choiceNumberOfLines);
  }
};

function deleteBoard() {
  let pixels = document.getElementsByClassName('line');
  console.log(pixels);
  for (let index = pixels.length - 1; index >= 0; index -= 1) {
    pixels[index].remove();
  }
};
