function selectInitialColor() {
  document.getElementById('Black').className = 'color selected';
}
selectInitialColor();

function setSelectedColor(event) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === event.target) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function pencil(event) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function starterPixelArt() {
  document.getElementById('color-palette');
  document.addEventListener('click', setSelectedColor);
  document.getElementById('pixel-board').addEventListener('click', pencil);
}

window.onload = starterPixelArt;
