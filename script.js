function generateColor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function createColorPalette() {
  const palettelist = document.getElementsByClassName('color');
  palettelist[0].style.backgroundColor = 'black';
  palettelist[0].classList.add('selected');
  let randColor;
  for (let index = 1; index < palettelist.length; index += 1) {
    randColor = generateColor();
    palettelist[index].style.backgroundColor = randColor;
  }
}
function paintPixel(event) {
  const curentColor = document.querySelector('.selected').style.backgroundColor;
  const a = event.target;
  a.style.backgroundColor = curentColor;
}

function eventPrintColor() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', paintPixel);
  }
}

function removeBoard() {
  const board = document.getElementById('pixel-board');
  const childList = board.childNodes;
  for (let index = 0; index < childList.length; index += 0) {
    board.removeChild(board.lastChild);
  }
}

function createBoard(size) {
  const board = document.getElementById('pixel-board');
  removeBoard();
  for (let index = 0; index < size; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    board.appendChild(line);
    for (let secondIndex = 0; secondIndex < size; secondIndex += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
  eventPrintColor();
}

function selectColor(event) {
  const current = document.querySelector('.selected');
  current.classList.remove('selected');
  event.target.classList.add('selected');
}

function eventColorSelect() {
  const colorList = document.getElementsByClassName('color');
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].addEventListener('click', selectColor);
  }
}

function clearBoard() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

function eventClear() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearBoard);
}

function checkSize() {
  const input = document.getElementById('board-size');
  if (input.value.length === 0) {
    alert('Board inválido!');
    return;
  }
  let size = parseInt(input.value, 10);
  if (size <= 5) {
    size = 5;
  } else if (size >= 50) {
    size = 50;
  }
  createBoard(size);
}

function eventResize() {
  const button = document.getElementById('size-form');
  button.addEventListener('submit', checkSize);
}

window.onload = function load() {
  createColorPalette();
  createBoard(5);
  eventColorSelect();
  eventClear();
  eventResize();
};
