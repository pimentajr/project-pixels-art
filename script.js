function inputClass() {
  const element = document.getElementById('black');
  element.classList.add('selected');
}

window.onload = inputClass;

const color1 = document.getElementById('black');
const color2 = document.getElementById('red');
const color3 = document.getElementById('blue');
const color4 = document.getElementById('green');

function caughtedColor(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', caughtedColor);
color2.addEventListener('click', caughtedColor);
color3.addEventListener('click', caughtedColor);
color4.addEventListener('click', caughtedColor);

function addPixelColor() {
  const p = document.getElementsByClassName('pixel');
  for (let i = 0; i < p.length; i += 1) {
    p[i].addEventListener('click', () => {
      const sColor = document.querySelector('.selected');
      p[i].style.background = window.getComputedStyle(sColor).getPropertyValue('background-color');
    });
  }
}
addPixelColor();

function clearPixel() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    const px = document.querySelectorAll('.pixel');
    for (let i = 0; i < px.length; i += 1) {
      px[i].style.backgroundColor = 'white';
    }
  });
}
clearPixel();
