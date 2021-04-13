function coloring(event) {
  const currentColor = document.querySelector('.selected');
  event.target.style.backgroundColor = currentColor.style.backgroundColor;
}
function palette(event) {
  const currentColor = document.querySelector('.selected');
  currentColor.classList.remove('selected');
  event.target.classList.add('selected');
}
function clearBoard(event) {
  const listPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < listPixels.length; index += 1){
    listPixels[index].style.backgroundColor = 'white';
  }
}
function inicio() {
  const colorPalette = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
  const button = document.querySelector('#clear-board');
  colorPalette.addEventListener('click', palette);
  pixelBoard.addEventListener('click', coloring);
  button.addEventListener('click', clearBoard);
}
window.onload = inicio;
