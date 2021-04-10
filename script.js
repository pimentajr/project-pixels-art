const pixelBoard = document.getElementById('pixel-board');
const pixelLine = document.querySelector('#pixel-board').children;
const colorPalette = document.querySelectorAll('#color-palette div');

function createStorage() {}
createStorage();

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
    colorPalette[i].addEventListener('click', (el) => {
      for (let j = 0; j < colorPalette.length; j += 1) {
        colorPalette[j].classList.remove('selected');
      }
      el.target.classList.add('selected');
      sessionStorage.color = el.target.getAttribute('id');
    });
  }
}
selectPalette();

function paintBlocks() {}

pixelBoard.addEventListener('click', (event) => {
  const el = event;
  el.target.style.backgroundColor = sessionStorage.color;
});
paintBlocks();

console.log(sessionStorage.color);
