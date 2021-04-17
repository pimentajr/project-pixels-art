let colors = document.getElementById('color-palette').children;

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', onColorClick);
}

function onColorClick(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');

  let clickedColor = event.target;
  clickedColor.classList.add('selected');
}
