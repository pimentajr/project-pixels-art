const colorPalette = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');
const buttonBoard = document.querySelector('#generate-board');
const pixelBoard = document.querySelector('#pixel-board');

let colorStorage = 'black';

function int(str) {
  return parseInt(str, 0);
}

function colorSelectEvent(e) {
  const element = e.target;
  if (element.className === 'color') {
    const color = document.querySelector('.color.selected');
    color.className = 'color';

    colorStorage = element.style.backgroundColor;
    element.className = 'color selected';
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
  if (x === y) {
    const input = document.querySelector('#board-size');
    input.value = x;
  }
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
  board.replaceWith(table);
}

function valueChecker(value, minimum, maximum) {
  console.log(value, minimum, maximum);
  if (minimum <= value && value <= maximum) {
    updatePixels(value, value);
  } else if (value <= minimum) {
    updatePixels(minimum, minimum);
  } else if (value > maximum) {
    updatePixels(maximum, maximum);
  }
}

function inputEvent() {
  const input = document.querySelector('#board-size');

  if (input.value !== '') {
    valueChecker(int(input.value), int(input.min), int(input.max));
  } else {
    alert('Board inválido!');
  }
}

function ran255() {
  return Math.floor(Math.random() * 255);
}

function randomColors() {
  const colors = document.querySelectorAll('.color');

  for (let c = 0; c < colors.length; c += 1) {
    const color = colors[c];
    if (c === 0) {
      color.style.backgroundColor = 'black';
    } else {
      const rgb = `rgb(${ran255()}, ${ran255()}, ${ran255()})`;
      color.style.backgroundColor = rgb;
    }
  }
}

window.onload = randomColors;

colorPalette.addEventListener('click', colorSelectEvent);
clearBoard.addEventListener('click', clearEvent);
buttonBoard.addEventListener('click', inputEvent);
pixelBoard.addEventListener('click', colorSetEvent);
