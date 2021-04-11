const colorSelected = document.querySelector('#color-palette');
const color = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const selectClickColor = document.querySelector('.selected');

function selectColor() {
  colorSelected.addEventListener('click', (events) => {
    const etarget = events.target;
    color.forEach((element) => element.classList.remove('selected'));
    etarget.classList.add('selected');
  });
}
selectColor();

function paintPixel() {
  pixelBoard.addEventListener('click', (events) => {
    const etarget = events.target;
    etarget.style.backgroundColor = getComputedStyle(selectClickColor).backgroundColor;
  });
}
paintPixel();
