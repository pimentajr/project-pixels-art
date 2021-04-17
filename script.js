let table = document.getElementById('pixel-board');
let generateBoard = document.getElementById('generate-board');
let boardSize = document.getElementById('board-size');
let clearBoard = document.getElementById('clear-board');
let colors = document.getElementById('color-palette').children;

generateBoard.addEventListener('click', onGenerateButton);
clearBoard.addEventListener('click', onClearButton);

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', onColorClick);
}

renderPixelBoard(5);

function renderPixelBoard(size) {
  table.innerHTML = '';

  for (let index = 0; index < size; index += 1) {
    let row = document.createElement('tr');
    table.appendChild(row);

    for (let index = 0; index < size; index += 1) {
      let pixel = document.createElement('td');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', onPixelClick);
      row.appendChild(pixel);
    }
  }
}

function onGenerateButton() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else {
    renderPixelBoard(boardSize.value);
  }
}

function onColorClick(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');

  let clickedColor = event.target;
  clickedColor.classList.add('selected');
}

function onPixelClick(event) {
  let selectedColor = document.querySelector('.selected');
  let selectedColorValue = selectedColor.style.backgroundColor;

  event.target.style.backgroundColor = selectedColorValue;
}

function onClearButton() {
  let pixels = document.querySelectorAll('#pixel-board .pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = '';
  }
}
