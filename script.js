const pixelsBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');

const DEFAULT_TABLE_VALUE = 5;
// const DEFAULT_COLOR = 'white';

const createrElements = (elem, cl) => {
  const element = document.createElement(elem);
  element.className = cl;
  return element;
};


window.onload = () => {
  for (let line = 0; line < DEFAULT_TABLE_VALUE; line += 1) {
    pixelsBoard.appendChild(createrElements('ul', `line ${line}`));
    for (let column = 0; column < DEFAULT_TABLE_VALUE; column += 1) {
      pixelsBoard.lastChild.appendChild(createrElements('li', `${line} ${column}`));
    }
  }
};

colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorPalette.children.length; index += 1) {
    colorPalette.children[index].classList.remove('selected');
  }
  return event.target.classList.toggle('selected');
});

