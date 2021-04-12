function selectInitialColor() {
  document.getElementById('Black').className = 'color selected';
}
selectInitialColor();

function setColor(event) {
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

function theChoosen(event) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function pageStarter() {
  document.getElementById('color-palette')
  document.addEventListener('click', setColor);
  document.getElementById('pixel-board').addEventListener('click', theChoosen);
}

window.onload = starterPixelArt;
