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

// set color class for color-palettes's childrens
for (let i = 0; i < palette.childElementCount; i += 1) {
  palette.children[i].className = 'color';
}

// get all .color
const colors = document.querySelectorAll('#color');

// set random colors
function randomColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[i].style.background = random;
  }
  colors[0].removeAttribute('className');
  colors[0].style.background = 'black';
  colors[0].className = 'selected';
}

// create and set mainContainer
const mainContainer = create('div');
mainContainer.id = 'pixel-board';
add(body, mainContainer);

const tableSize = 25;

// create and set pixels on MainContainer
for (let j = 0; j < tableSize; j += 1) {
  const pixels = create('div');
  pixels.className = 'pixel';
  add(mainContainer, pixels);
}

// const pixels = document.querySelectorAll('.pixel');

// to Selected class function
function classSelected() {
  if (event.target.className === 'pixel') {
    event.target.className = 'selected';
  }
}

// start function
function start() {
  randomColors();
  mainContainer.addEventListener('click', classSelected);
}

// window.onload function
window.onload = () => start();
