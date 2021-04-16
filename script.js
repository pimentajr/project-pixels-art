// 4
function createTable() {
  const input = document.getElementById('board-size');
  const pixelBoard = document.getElementById('pixel-board');
  if (input.value === '') {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  for (let line = 0; line < input.value; line += 1) {
    let tableLine = document.createElement('tr');
    tableLine.className = 'rows';
    for (let colum = 0; colum < input.value; colum += 1) {
      let tableColum = document.createElement('td');
      tableColum.className = 'pixel';
      tableLine.appendChild(tableColum);
    }
    pixelBoard.appendChild(tableLine);
  }
}

createTable();
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

let pixelsBoard = document.getElementsByClassName('pixel');
appendcolorPixelListener(pixelsBoard);

// ex 9
function clearPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

const limpar = document.getElementById('clear-board');
limpar.addEventListener('click', clearPixel);

// ex 10
const vqvButton = document.getElementById('generate-board');

function deleteTable() {
  const rows = document.getElementsByClassName('rows');
  for (let index = rows.length - 1; index >= 0; index -= 1) {
    rows[index].remove();
  }
}
vqvButton.addEventListener('click', deleteTable);
vqvButton.addEventListener('click', createTable);

// ex 11
window.onload = function () {
  for (let index = 1; index < colorPAllet.length; index += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colorPAllet[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
};
