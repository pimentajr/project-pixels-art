const palette = ['black', 'red', 'blue', 'yellow'];
const colorPalette = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');
sessionStorage.color = 'black';

function colorSelectEvent(e) {
  for (let i = 0; i < colorPalette.children.length; i += 1) {
    const element = colorPalette.children[i];
    if (element.className === 'color selected') {
      element.className = 'color';
    }
  }
  sessionStorage.color = e.target.style.backgroundColor;
  e.target.className = 'color selected';
}

function colorSetEvent(e) {
  e.target.style.backgroundColor = sessionStorage.color;
}

function clearEvent() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const element = pixels[i];
    element.style.backgroundColor = 'white';
  }
}

function createPalette() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < palette.length; i += 1) {
    color[i].style.backgroundColor = palette[i];
    color[i].onclick = colorSelectEvent;
  }
}

function createPixels(x, y) {
  const table = document.createElement('table');
  table.id = 'pixel-board';

  for (let xi = 0; xi <= x; xi += 1) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let yi = 0; yi <= y; yi += 1) {
      const td = document.createElement('td');
      td.onclick = colorSetEvent;
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
  document.body.appendChild(table);
}

createPalette();
createPixels(5, 5);
clearBoard.addEventListener('click', clearEvent);
