const colorPalette = document.getElementById('color-palette');

colorPalette.onclick = function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorAux = selectedColor;
  if (selectedColor) colorAux.classList.remove('selected');
  event.target.classList.add('selected');
};

// const pixelBoard = document.getElementById('pixel-board');

// pixelBoard.onclick = function paint(e) {
//   const selectedColor = document.getElementsByClassName('color selected');
//   console.log(selectedColor[0].style.backgroundColor);
//   e.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
// };
