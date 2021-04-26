window.onload = function board() {
  let height = 5;
  let width = 5;
  let pixelBoard = document.getElementById('pixel-board');
  for (index = 0; index < height; index += 1) {
    let div = document.createElement('div');
    for (jndex = 0; jndex < width; jndex += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      div.appendChild(pixel);
    }
    pixelBoard.appendChild(div);
  }
};

const paleta = document.getElementById('color-palette');
paleta.addEventListener('click', selectedColor);
paleta.addEventListener('click', pickColor);

const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', whiteBoard);

const quadro = document.getElementById('pixel-board');
quadro.addEventListener('click', setColor);

function selectedColor(event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(event.target);
}

let initialColor = 'rgb(0,0,0)';

function pickColor(event) {
  let color = document.querySelector('.selected');
  event = window
    .getComputedStyle(color, null)
    .getPropertyValue('background-color');
  initialColor = event;
  console.log(event);
}

function setColor(event) {
  event.target.style.backgroundColor = initialColor;
  console.log(event.target.style);
}

function whiteBoard() {
  let white = 'rgb(255,255,255)';
  let pixel = document.getElementsByClassName('pixel');
  for (index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = white;
  }
}
