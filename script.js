// function to abbreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abbreviate appendChild
function add(father, son) {
  return father.appendChild(son);
}

// get body and #color-palette
const { body } = document;
const palette = document.querySelector('#color-palette');

// set color as class for color-palettes's childrens
for (let index = 0; index < palette.childElementCount; index += 1) {
  palette.children[index].className = 'color';
}

// get all .color
const colors = document.querySelectorAll('.color');

// set random colors
function randomColors() {
  for (let index = 0; index < colors.length; index += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[index].style.background = random;
  }
  colors[0].style.background = 'black';
}

// create and set mainContainer
const mainContainer = create('container');
add(body, mainContainer);
mainContainer.id = 'pixel-board';

// create and set pixelBoard and pixels
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

// get .pixels
const pixels = document.querySelector('.pixel');

// start function
function start() {
  randomColors();

  pixels.addEventListener('click', () => {
    pixels.className = 'selected';
  });
}

// window.onload function
window.onload = () => start();
