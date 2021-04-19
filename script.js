const selectableColors = document.querySelectorAll('.color');
function makeSelected(event) {
  const colorSelected = event;
  document.querySelectorAll('.selected')[0].className = 'color';
  colorSelected.target.className = 'color selected';
}
for (let index = 0; index < selectableColors.length; index += 1) {
  selectableColors[index].addEventListener('click', makeSelected);
}

function Coloring(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
}
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', Coloring);
}

function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoard);
