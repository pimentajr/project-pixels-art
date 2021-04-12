const colorsPalette = ['black', 'red', 'yellow', 'orange'];
let selectedColor = colorsPalette[0];

function color() {
  const colors = document.getElementsByClassName('color');
  colors[0].style.background = 'black';
  colors[1].style.background = 'red';
  colors[2].style.background = 'yellow';
  colors[3].style.background = 'orange';
}
color();

function changeSelectedColor(event) {
  const ball = event.target;
  selectedColor = ball.id;
  document.querySelector('.selected').classList.remove('selected');
  ball.classList.add('selected');
}

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', changeSelectedColor)

})

function pixelColor(eventColor) {
  const square = eventColor.target;
  square.style.background = selectedColor;
}

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', pixelColor)

})

function clearPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.background = 'white';
  }
}

const button = document.getElementById('clear-board');
let pixels = document.querySelectorAll('.pixel');

button.addEventListener('click', clearPixels);
