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
for (let i = 0; i < palette.childElementCount; i += 1) {
  palette.children[i].className = 'color';
}

// get all .color
const colors = document.querySelectorAll('.color');

// set random colors
function randomColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[i].style.background = random;
  }
  colors[0].style.background = 'black';
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

// get all class pixel
const pixels = document.querySelectorAll('.pixel');

// Selected Color class (in navigation) function
function classSelected(element) {
  // forEach element in colors (line 21) remove class if selected or add class selected
  colors.forEach((x) => x.classList.remove('selected'));
  element.classList.add('selected');
}

// draw pixels in the pixelboard
function drawPixels(px) {
  const aux = px; // I had to use an aux variable to fix an ESlint problem about parameter assingment
  const pixelSelected = document.querySelector('.selected');
  // takes the style.background of element in selected class
  aux.style.backgroundColor = pixelSelected.style.backgroundColor;
}

const clearButton = document.querySelector('#clear-board');

// function Clear Button
function clearBoard() {
  pixels.forEach((e) => {e.style.background = 'white'; });
}

// start function
function start() {
  // Call functions
  randomColors();
  // EventListeners
  // How is a lot of pixels to work, I had to use ForEach, the normal For loop don't work propelly
  colors.forEach((element) => element.addEventListener('click', (e) => classSelected(e.target)));
  pixels.forEach((px) => px.addEventListener('click', (e) => drawPixels(e.target)));
  clearButton.addEventListener('click', clearBoard);
}

// window.onload function
window.onload = () => start();
