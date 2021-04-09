const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const purpleColor = document.getElementById('purple');

blackColor.addEventListener('click', selectedColor);
redColor.addEventListener('click', selectedColor);
blueColor.addEventListener('click', selectedColor);
purpleColor.addEventListener('click', selectedColor);

function selectedColor(param) {
  blackColor.className = 'color';
  redColor.className = 'color';
  blueColor.className = 'color';
  purpleColor.className = 'color';
  param.target.className = 'color selected';
}



