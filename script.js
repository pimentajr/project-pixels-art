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
