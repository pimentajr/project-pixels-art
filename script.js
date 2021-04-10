const colors = document.querySelectorAll('.color');
function changesToBlack() {
  if (colors[0].style.backgroundColor !== 'black') {
    colors[0].style.backgroundColor = 'black';
  }
}
changesToBlack();

function defineSelectedColor() {
  colors[0].className = 'color selected';
}
defineSelectedColor();
