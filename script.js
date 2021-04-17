let colors = document.getElementById('color-palette').children;

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', onColorClick);
}

function onColorClick(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');

  let clickedColor = event.target;
  clickedColor.classList.add('selected');
}

let pixels = document.querySelectorAll('#pixel-board .pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', onPixelClick);
}

function onPixelClick(event) {
  let selectedColor = document.querySelector('.selected');
  let selectedColorValue = selectedColor.style.backgroundColor;

  event.target.style.backgroundColor = selectedColorValue;
}

let clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', onClearButton);

function onClearButton() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = '';
  }
}
