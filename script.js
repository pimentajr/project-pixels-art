let black = document.querySelector('.black');
let green = document.querySelector('.green');
let grey = document.querySelector('.grey');
let magenta = document.querySelector('.magenta');
let paleta = document.querySelector('#color-palette');

black.className = 'color black selected';

paleta.addEventListener('click', function color(event) {
  let color = event.target;
  let colorName = color.classList[1];
  console.log(colorName);
  color.className = 'color' + ' ' + colorName + ' selected';
  return colorName;
});
