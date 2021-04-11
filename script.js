const colorPalette = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size')
const buttonBoard = document.querySelector('#generate-board');
const pixelBoard = document.querySelector('#pixel-board');

let colorStorage = 'black';

function int(str) {
  return parseInt(str, 0);
}

function colorSelectEvent(e) {
  const element = e.target;
  if (element.classList.contains('color')) {
    const color = document.querySelector('.selected');
    color.classList.remove('selected');

    colorStorage = element.style.backgroundColor;
    element.classList.add('selected');
  }
}

function colorSetEvent(e) {
  const element = e.target;
  if (element.className === 'pixel') {
    element.style.backgroundColor = colorStorage;
  }
}

function clearEvent() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const element = pixels[i];
    element.removeAttribute('style');
  }
}

function updatePixels(x, y) {
  const board = document.querySelector('table');
  const table = document.createElement('table');
  table.id = 'pixel-board';
  for (let xi = 0; xi < x; xi += 1) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let yi = 0; yi < y; yi += 1) {
      const td = document.createElement('td');
      td.onclick = colorSetEvent;
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
  board.replaceWith(table);
}

function valueChecker(value, minimum, maximum) {
  console.log(value, minimum, maximum);
  if (minimum <= value && value <= maximum) {
    updatePixels(value, value);
  } else if (value <= minimum) {
    updatePixels(value, minimum);
  } else if (value > maximum) {
    updatePixels(value, maximum);
  }
}

function inputEvent(e) {
  const input = e.target.previousElementSibling;

  if (input.value !== '') {
    valueChecker(int(input.value), 5, int(input.max));
  } else {
    alert('Board inválido!');
  }
}

function ran255() {
  return Math.floor(Math.random() * 255);
}

function randomColors() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';

  for (let c = 1; c < colors.length; c += 1) {
    const color = colors[c];
    const rgb = `rgb(${ran255()}, ${ran255()}, ${ran255()})`;
    color.style.backgroundColor = rgb;
  }
}

window.onload = randomColors;
// randomColors();

colorPalette.addEventListener('click', colorSelectEvent);
clearBoard.addEventListener('click', clearEvent);

inputBoard.addEventListener('change', inputEvent);
buttonBoard.addEventListener('click', inputEvent);

pixelBoard.addEventListener('click', colorSetEvent);
