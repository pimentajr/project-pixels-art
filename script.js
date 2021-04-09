const black = document.getElementById('black');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

black.addEventListener('click', selectColor);
yellow.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);

function selectColor (param) {
  black.className = 'color';
  yellow.className = 'color';
  red.className = 'color';
  blue.className = 'color';
  param.target.className = 'selected'
}