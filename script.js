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
  let ball = event.target;
  selectedColor = ball.id;
  document.querySelector('.selected').classList.remove('selected');
  ball.classList.add('selected');
}

document.querySelectorAll('.color').forEach(function (item) {
  item.addEventListener('click', changeSelectedColor);
});