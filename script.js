const pixelBoard = document.getElementById('pixel-board');
const pixelLine = document.querySelector('#pixel-board').children;
const colorPalette = document.querySelectorAll('#color-palette div');

function CreateLineBox() {
  for (let i = 0; i < 5; i += 1) {
    const box = document.createElement('div');
    box.setAttribute('class', 'pixel-line');
    pixelBoard.appendChild(box);
  }
}
CreateLineBox();

function createAllBoxes() {
  for (let i = 0; i < pixelLine.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const box = document.createElement('div');
      box.setAttribute('class', 'pixel');
      pixelLine[i].appendChild(box);
    }
  }
}
createAllBoxes();

function selectPalette() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', (event) => {
      for (let j = 0; j < colorPalette.length; j += 1) {
        colorPalette[j].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
selectPalette();

function paintBlocks() {}
const currentColor = document.querySelector('.pixel-line');

pixelBoard.addEventListener('click', (event) => {
  event.target.style.backgroundColor = currentColor;
});
paintBlocks();

console.log(currentColor);
