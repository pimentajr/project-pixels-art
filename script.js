const colorIdPallete = document.querySelector('#color-palette');
const buttonId = document.querySelector('#button');
const pixelBoardID = document.querySelector('#pixel-board');

function createDiv1(tag, classN) {
  const CreatDiv = document.createElement(tag);
  CreatDiv.className = classN;
  colorIdPallete.appendChild(CreatDiv);
}

createDiv1('div', 'black color');
createDiv1('div', 'red color');
createDiv1('div', 'green color');
createDiv1('div', 'blue color');

function setClassColor() {
  const classColor = document.querySelector('.black');
  classColor.classList.add('selected');
}

setClassColor();

// Desafio 7
function setColorPalette(event) {
  const setColor = document.querySelectorAll('.selected');
  for (let index = 0; index < setColor.length; index += 1) {
    setColor[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

colorIdPallete.addEventListener('click', setColorPalette);

// Desafio 8
function colorPixel(event) {
  const actualColor = document.querySelector('.selected');
  const color = getComputedStyle(actualColor).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

pixelBoardID.addEventListener('click', colorPixel);

// buttons
function createButton() {
  const bStart = document.createElement('button');
  bStart.id = 'clear-board';
  bStart.innerHTML = 'Vamos Limpar!';
  buttonId.appendChild(bStart);
}

createButton();

function clearALL() {
  const cALL = document.querySelectorAll('.pixel');
  for (let index = 0; index < cALL.length; index += 1) {
    cALL[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const clear = document.querySelector('#clear-board');

clear.addEventListener('click', clearALL);

// Desafio 10
function createInputButton(tag, idN) {
  const create = document.createElement(tag);
  create.id = idN;
  create.innerHTML = 'Mais de linhas!';
  buttonId.appendChild(create);
}

createInputButton('button', 'generate-board');
createInputButton('input', 'board-size');

// apagar a pixel board
function clearPixelBoard() {
  while (pixelBoardID.lastElementChild) {
    pixelBoardID.removeChild(pixelBoardID.lastElementChild);
  }
}




const sizeInput = document.getElementById('board-size');
const button = document.getElementById('generate-board');

button.addEventListener('click', () => {
  let sizeBord = sizeInput.value;
  if (!sizeBord) {
    return alert('Board inválido!');
  }

  sizeBord = parseInt(sizeBord, 10);

  if (sizeBord < 5) {
    sizeBord = 5;
  } else if (sizeBord > 50) {
    sizeBord = 50;
  }
});
