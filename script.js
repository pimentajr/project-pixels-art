const palette = document.querySelector('#color-palette');

for (let i = 0; i < palette.childElementCount; i += 1) {
  palette.children[i].className = 'color';
}

const colors = document.querySelectorAll('.color');

function randomColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[i].style.background = random;
  }
  colors[0].style.background = 'black';
}

function start() {
  randomColors();
}

window.onload = () => start();
