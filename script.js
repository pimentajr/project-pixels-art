const colorSelected = document.querySelectorAll('#color-palette');
const color = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const selectClickColor = document.querySelector('.selected');

function selectColor() {
  colorSelected.addEventListener('click', (event) => {
    const etarget = event.target;
    color.forEach((element) => element.classList.remove('selected'));
    etarget.classList.add('selected');
  });
}
selectColor();

function paintPixel() {
  pixelBoard.addEventListener('click', (event) => {
    const etarget = event.target;
    etarget.style.backgroundColor = getComputedStyle(selectClickColor).backgroundColor;
  });
}
paintPixel();
