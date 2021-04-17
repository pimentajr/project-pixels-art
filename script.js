let colors = document.getElementById('color-palette').children;

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', onColorClick);
}

function onColorClick(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
