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

// custom table size (under construction)
const midDiv = document.querySelector('#mid-div');

// input
const tableInpt = create('input');
tableInpt.id = 'board-size';
tableInpt.type = 'number';
add(midDiv, tableInpt);

// create button
const tableBtn = create('button');
tableBtn.id = 'generate-board';
tableBtn.innerText = 'VQV';
add(midDiv, tableBtn);

// create and set pixels on MainContainer
function initialBoard() {
  for (let index = 0; index < 25; index += 1) {
    const pixels = create('div');
    pixels.className = 'pixel';
    add(mainContainer, pixels);
  }
}

// board conditionals
function tableConditional(number) {
  let aux = number;
  switch (true) {
  case (aux <= 0):
    alert('Board inválido!');
    break;
  case (aux > 0 && aux < 5):
    aux = 5;
    break;
  case (aux > 50):
    aux = 50;
    break;
  default:
    return aux;
  }
}

// build board
function setSize() {
  const tableSize = tableInpt.value;
  const auxSize = tableConditional(tableSize);
  for (let index = 0; index < auxSize; index += 1) {
    const pixels = create('div');
    pixels.className = 'pixel';
    add(mainContainer, pixels);
  }
}

// get all class pixel
// const pixels = document.querySelectorAll('.pixel');

// initial black color selected
colors[0].classList.add('selected');

// Selected Color class (in navigation) function
function classSelected(event) {
  const aux = event;
  if (aux.target === palette) return null; // thanks to Panta
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
    aux.target.classList.add('selected');
  }
}

// draw pixels in the pixelboard
function drawPixels(event) {
  const aux = event;
  if (aux.target === mainContainer) return null; // thanks to Panta
  const pixelSelected = document.querySelector('.selected');
  aux.target.style.background = pixelSelected.style.background;
}

const clearButton = document.querySelector('#clear-board');

// function Clear Button
function clearBoard() {
  for (let index = 0; index < mainContainer.childElementCount; index += 1) {
    mainContainer.children[index].style.background = 'white';
  }
}

// window.onload function
window.onload = () => {
  randomColors();
  initialBoard();
  palette.addEventListener('click', classSelected);
  mainContainer.addEventListener('click', drawPixels);
  clearButton.addEventListener('click', clearBoard);
  tableBtn.addEventListener('click', setSize);
};
