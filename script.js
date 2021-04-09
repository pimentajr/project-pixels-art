const colorPalette = document.getElementById('color-palette');

colorPalette.onclick = function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorAux = selectedColor;
  event.target.classList.add('selected');
  colorAux.classList.remove('selected');
};
