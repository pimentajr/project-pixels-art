const pixelsBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const DEFAULT_TABLE_VALUE = 5;
const DEFAULT_COLOR = 'white';

colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorPalette.children.length; index += 1) {
    colorPalette.children[index].classList.remove('selected');
  }
  return event.target.classList.toggle('selected');
});


const changePixelColor = (event) => {
  let selectedColor = document.querySelector('#color-palette .selected');
  selectedColor = selectedColor.classList[1];
  let pixel = event.target;
  pixel.style.backgroundColor = selectedColor;
}

const createrElements = (elem, cl, id) => {
  const element = document.createElement(elem);
  cl ? element.className = cl : '';
  id ? element.id = id : '';
  if (elem == 'li') {
    element.addEventListener('click', changePixelColor);
  }
  return element;
};

const createTable = () => {
  for (let line = 0; line < DEFAULT_TABLE_VALUE; line += 1) {
    pixelsBoard.appendChild(createrElements('ul', '', `line ${line}`));
    for (let column = 0; column < DEFAULT_TABLE_VALUE; column += 1) {
      let pixelLine = pixelsBoard.lastChild.appendChild(createrElements('li', 'pixel', `${line} ${column}`));
      pixelLine.style.backgroundColor = DEFAULT_COLOR;
    }
  }
}

createTable();


