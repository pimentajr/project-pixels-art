function create(tag) {
  return document.createElement(tag);
}

function addTo(father, son) {
  return father.appendChild(son);
}

function addClass(element, className) {
  element.className = className;
  return element.className;
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

const pixelBoard = create('section');
addTo(body, pixelBoard);
addClass(pixelBoard, 'pixel-board');

for (let i = 0; i < 5; i += 1) {
  const pixelCreate = create('div');
  addTo(pixelBoard, pixelCreate);
}

for (let i = 0; i < pixelBoard.childElementCount; i += 1) {
  addClass(pixelBoard.children[i], 'pixels');
}

const pixels = document.querySelector('.pixels');

function start() {
  randomColors();
}

window.onload = () => start();
