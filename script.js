// function to abbreviate createElement
function create(tag) {
  return document.createElement(tag);
}

// function to abbreviate appendChild
function add(father, son) {
  return father.appendChild(son);
}

// get body and #color-palette
const { body } = document; // EsLint quickfix solution for body = document.body
const palette = document.querySelector('#color-palette');

// set color class for color-palettes's childrens
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
const mainContainer = create('div');
mainContainer.id = 'pixel-board';
add(body, mainContainer);

const tableSize = 25;

// create and set pixels on MainContainer
for (let index2 = 0; index2 < tableSize; index2 += 1) {
  const pixels = create('div');
  pixels.className = 'pixel';
  add(mainContainer, pixels);
}

// get all class pixel
const pixels = document.querySelectorAll('.pixel');

// initial black color selected
colors[0].classList.add('selected');

// Selected Color class (in navigation) function
function classSelected(element) {
  colors[0].classList.remove('selected');
  // forEach element in colors (line 21) remove class if selected or add class selected
  colors.forEach((e) => e.classList.remove('selected'));
  element.classList.add('selected');
}

// draw pixels in the pixelboard

function drawPixels(pxElm) {
  const aux = pxElm; // I had to use an aux variable to fix an ESlint problem about parameter assignment
  // takes the style.background of element in selected class
  const pixelSelected = document.querySelector('.selected');
  aux.style.background = pixelSelected.style.background;
}

const clearButton = document.querySelector('#clear-board');

// function Clear Button
function clearBoard() {
  pixels.forEach((e) => { e.style.background = 'white'; });
}

// start function
function start() {
  // Call functions
  randomColors();
  // EventListeners
  // How is a lot of pixels to work, I had to use ForEach, the normal For loop don't work propelly
  colors.forEach((element) => element.addEventListener('click', (ev) => classSelected(ev.target)));
  pixels.forEach((pxElm) => pxElm.addEventListener('click', (ev) => drawPixels(ev.target)));
  clearButton.addEventListener('click', clearBoard);
}

// window.onload function
window.onload = () => start();
