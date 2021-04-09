const blackColor = document.querySelector('#black');
blackColor.classList.add('selected');

const colorPalette = document.querySelectorAll('.selected');
function selectColor() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    if (colorPalette.className === 'color selected') {
      colorPalette.classList.remove('selected');
    } else {
      colorPalette.classList.add('selected');
    }
  }
}
colorPalette.addEventListener('click', selectColor);
