const colorPalette = document.getElementById('color-palette');
const color = document.getElementsByClassName('color');
colorPalette.onclick = function changeColor(event) {
  for (let index = 0; index < color.length; index += 1) {
    if (event.target.className === 'color selected') {
      event.target.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
};
