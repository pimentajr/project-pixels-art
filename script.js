window.onload = createPixels

const frame = document.querySelector('#pixel-board');
function createPixels() {
  for (let index = 0; index < 5; index += 1) {
    const box = document.createElement('div');
    frame.appendChild(box);
    for (let index = 0; index < 5; index += 1) {
      const box = document.createElement('div');
      box.classList.add('pixel');
      frame.appendChild(box);
      box.style.backgroundColor = 'white';
      box.style.display = 'inline-block';
      box.style.height = '40px';
      box.style.width = '40px';
      box.style.border = 'solid 1px black';
    }
  }
}

let elementColorBlack = document.querySelector('#color-palette').firstElementChild;
elementColorBlack.classList.add('selected');

const color = document.querySelectorAll('.color');
const colorPalette = document.querySelector('#color-palette');

function changeSelection(event) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

colorPalette.addEventListener('click', changeSelection);
