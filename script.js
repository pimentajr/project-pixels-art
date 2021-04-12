function setInitialColor() {
  const element = document.querySelector('.black');
  element.classList.add('selected');
}

setInitialColor();

function addOrRemoveClass(event) {
  const targetElement = event.target;
  const getClass = document.getElementsByClassName('selected');

  for (let index = 0; index < getClass.length; index += 1) {
    getClass[index].classList.remove('selected');
  }
  targetElement.classList.add('selected');
}

const element = document.querySelector('#color-palette');
element.addEventListener('click', addOrRemoveClass);

function paintPixels(event) {
  const targetElement = event.target;
  const getClass = document.getElementsByClassName('selected')[0];
  const attColor = getComputedStyle(getClass).backgroundColor;
  targetElement.style.backgroundColor = attColor;
}

const selectColors = document.querySelector('#pixel-board');
selectColors.addEventListener('click', paintPixels);

// problema da funcao anonima resolvida atraves deste material: https://eslint.org/docs/rules/prefer-arrow-callback.
function clearPixel() {
  const button = document.querySelector('#clear-board');

  button.addEventListener('click', () => {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  });
}

clearPixel();

let genBoardSize = 0;

function defineBoardSize() {
  const newTable = document.querySelector('#pixel-board');
  newTable.innerHTML = '';

  for (let index = 0; index < genBoardSize; index += 1) {
    const tableDiv = document.createElement('div');
    newTable.appendChild(tableDiv);
    tableDiv.className = 'column borderBlack';

    for (let lineIndex = 0; lineIndex < genBoardSize; lineIndex += 1) {
      const linePixel = document.createElement('div');
      tableDiv.appendChild(linePixel);
      linePixel.className = 'pixel borderBlack';
    }
  }
}

const genBoardButton = document.getElementById('generate-board');

genBoardButton.addEventListener('click', () => {
  genBoardSize = document.getElementById('board-size').value;

  if (genBoardSize.length === 0) {
    alert('Board inválido!');
    genBoardSize = 5;
  } else if (genBoardSize < 5) {
    genBoardSize = 5;
  } else if (genBoardSize > 50) {
    genBoardSize = 50;
  }
  defineBoardSize();
  console.log(genBoardSize);
});

const color1 = document.getElementsByClassName('red')[0];
const color2 = document.getElementsByClassName('blue')[0];
const color3 = document.getElementsByClassName('lightsalmon')[0];

function genRandomColor() {
  const randomColor1 = Math.ceil(Math.random() * 255);
  const randomColor2 = Math.ceil(Math.random() * 255);
  const randomColor3 = Math.ceil(Math.random() * 255);

  return `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

color1.style.backgroundColor = genRandomColor();
color2.style.backgroundColor = genRandomColor();
color3.style.backgroundColor = genRandomColor();
