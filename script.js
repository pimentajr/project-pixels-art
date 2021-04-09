window.onload = function() {

  let colorPalette = document.getElementById('color-palette');
  let arrColors = ['black', 'blue', 'magenta', 'yellow', 'red'];

  for (let index = 0; index < arrColors.length; index += 1) {
    let colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.classList.add(arrColors[index]);
    colorPixel.style.backgroundColor = arrColors[index];
    colorPixel.style.margin = '5px';
    colorPixel.style.border = 'solid 1px black';
    colorPalette.appendChild(colorPixel);
  }
}