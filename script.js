function create(tag) {
  return document.createElement(tag);
}

function add(father, son) {
  return father.appendChild(son);
}

const { body } = document;
const palette = document.querySelector('#color-palette');

for (let i = 0; i < palette.childElementCount; i += 1) {
  palette.children[i].className = 'color';
}

const colors = document.querySelectorAll('.color');

function randomColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[i].style.background = random;
  }
  colors[0].style.background = 'black';
}

for (let i = 0; i < 5; i += 1) {
  const pixelBoard = create('section');
  pixelBoard.className = 'pixel-board';
  add(body, pixelBoard);

  for (let j = 0; j < 5; j += 1) {
    const pixels = create('div');
    pixels.className = 'pixels';
    add(pixelBoard, pixels);
  }
}

// const pixels = document.querySelector('.pixels');

function start() {
  randomColors();
}

window.onload = () => start();
