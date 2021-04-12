function selectInitialColor() {
  document.getElementById('Black').className = 'color selected';
}
selectInitialColor(evento);

function setColor(evento) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === evento.target) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function choose(evento) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = evento.target;
  pixel.style.backgroundColor = color;
}

function starterPixelArt() {
  document.getElementById('color-palette');
  document.addEventListener('click', setColor);
  document.getElementById('pixel.board').addEventListener('click', choose);
}

window.onload = starterPixelArt;
