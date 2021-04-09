function create(tag) {
  return document.createElement(tag);
}

function add(father, son) {
  return father.appendChild(son);
}

const { body } = document;
const palette = document.querySelector('#color-palette');

for (let index = 0; index < palette.childElementCount; index += 1) {
  palette.children[index].className = 'color';
}

const colors = document.querySelectorAll('.color');

function randomColors() {
  for (let index = 0; index < colors.length; index += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[index].style.background = random;
  }
  colors[0].style.background = 'black';
}

const mainContainer = create('container');
mainContainer.id = 'pixel-board';
add(body, mainContainer);

for (let index = 0; index < 5; index += 1) {
  const pixelBoard = create('section');
  pixelBoard.className = 'pixel-vector';
  add(mainContainer, pixelBoard);

  for (let index2 = 0; index2 < 5; index2 += 1) {
    const pixels = create('div');
    pixels.className = 'pixel';
    add(pixelBoard, pixels);
  }
}

// const pixels = document.querySelector('.pixels');

function start() {
  randomColors();
}

window.onload = () => start();
