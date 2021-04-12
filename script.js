function selectInitialColor() {
  document.getElementById('Black').className = 'color selected';
}
selectInitialColor();

const pixelBoard = document.getElementById('pixel-board');

function setSelectColor(targetColor) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === targetColor) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function colorSelector(targetColor) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = targetColor.target;
  pixel.style.backgroundColor = color;
}

function starterPixelArt() {
  document.getElementById('color-palette');
  document.addEventListener('click', setSelectColor);
  pixelBoard.addEventListener('click', colorSelector);
}

window.onload = starterPixelArt;
