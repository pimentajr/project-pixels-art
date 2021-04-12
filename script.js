window.onload = function load() {
  document.querySelector('#black').classList.add('selected');
  document.querySelector('#color-palette div:first-child').style.backgroundColor = 'black';

  for (let index = 2; index < 5; index += 1) {
    const divChild = document.querySelector(`#color-palette div:nth-child(${index})`);
    const random1 = parseInt(Math.random() * 255, 10);
    const random2 = parseInt(Math.random() * 255, 10);
    const random3 = parseInt(Math.random() * 255, 10);
    divChild.id = `rgb(${random1}, ${random2}, ${random3})`;
    divChild.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
  }
};

const colorSection = document.getElementById('color-palette');

function addClassToPallete(event) {
  for (let index = 1; index < 5; index += 1) {
    const divChild = document.querySelector(`#color-palette div:nth-child(${index})`);
    divChild.className = 'color';
  }

  if (event.target !== colorSection) {
    event.target.classList.add('selected');
  }
}

colorSection.addEventListener('click', addClassToPallete);

const pixels = document.querySelector('#pixel-board');

function addColorToPixels(event) {
  const actualColor = document.querySelector('.selected');
  const pixel = event.target;
  pixel.style.backgroundColor = actualColor.style.backgroundColor;
}

pixels.addEventListener('click', addColorToPixels);

const button = document.querySelector('#clear-board');
let allPixels = document.querySelectorAll('.pixel');

const input = document.querySelector('#board-size');

function numberTyped(event) {
  const number = event.target.value;
  input.value = number;
}

input.addEventListener('input', numberTyped);

const Table = document.querySelector('tbody');
let tableChild = document.querySelectorAll('tr');
const createPixels = document.querySelector('#generate-board');

function alertBox() {
  if (input.value === '') {
    return alert('Board inválido!');
  }
}

function validationNumber() {
  if (input.value > 50) {
    input.value = 50;
    return input.value;
  } if (input.value < 5) {
    input.value = 5;
    return input.value;
  }
}

function creatingPixelBox() {
  alertBox();
  validationNumber();

  for (let index = 0; index < tableChild.length; index += 1) {
    Table.removeChild(tableChild[index]);
  }

  for (let index = 1; index <= input.value; index += 1) {
    const row = document.createElement('tr');
    Table.appendChild(row);
    for (let index2 = 1; index2 <= input.value; index2 += 1) {
      const column = document.createElement('td');
      column.className = 'pixel';
      row.appendChild(column);
    }
  }
  allPixels = document.querySelectorAll('.pixel');
  tableChild = document.querySelectorAll('tr');
}

createPixels.addEventListener('click', creatingPixelBox);

function clearPixels() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].removeAttribute('style');
  }
}

button.addEventListener('click', clearPixels);
