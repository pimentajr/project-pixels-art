const colors = document.getElementsByClassName('color');

// Ex 7
function removeClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

function addClass(event) {
  event.target.classList.add('selected');
}

function configColorPallet(pallet) {
  for (let item = 0; item < pallet.length; item += 1) {
    const eventItem = pallet[item];
    eventItem.addEventListener('click', removeClass);
    eventItem.addEventListener('click', addClass);
  }
}

const colorPAllet = document.getElementsByClassName('color');
configColorPallet(colorPAllet);

// ex 8 ------ Refazer essa questão sozinho.
function colorPixel(self) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const color = getComputedStyle(colorSelected).backgroundColor;
  self.target.style.backgroundColor = color;
}

function appendcolorPixelListener(pixels) {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorPixel);
  }
}

const pixelsBoard = document.getElementsByClassName('pixel');

// ex 9
function clearPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

const limpar = document.getElementById('clear-board');

// ex 10
const vqvButton = document.getElementById('generate-board');

function deleteTable() {
  const rows = document.getElementsByClassName('rows');
  for (let index = rows.length - 1; index >= 0; index -= 1) {
    rows[index].remove();
  }
}

// ex 11
function randomColor() {
  for (let index = 1; index < colorPAllet.length; index += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colorPAllet[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function checkInput(Boardinput) {
  if (!Boardinput) {
    alert('Board inválido!');
    return;
  }
  checkNumber(Boardinput);
}

function newBoard() {
  const Boardinput = document.getElementById('board-size').value;
  checkInput(Boardinput);
}

function createTable(number) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < number; line += 1) {
    const tableLine = document.createElement('tr');
    tableLine.className = 'rows';
    for (let colum = 0; colum < number; colum += 1) {
      const tableColum = document.createElement('td');
      tableColum.className = 'pixel';
      tableLine.appendChild(tableColum);
    }
    pixelBoard.appendChild(tableLine);
  }
  appendcolorPixelListener(pixelsBoard);
  randomColor();
  limpar.addEventListener('click', clearPixel);
  vqvButton.addEventListener('click', deleteTable);
  vqvButton.addEventListener('click', newBoard);
}

function checkNumber(number) {
  let num = number;
  if (num < 5) {
    num = 5;
  }
  if (num > 50) {
    num = 50;
  }
  createTable(num);
}

window.onload = createTable(5);
