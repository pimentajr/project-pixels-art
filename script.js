function selectInitialColor() {
  document.getElementById('Black').className = 'color selected';
}
selectInitialColor();

function setSelectColor(tagetColor) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === tagetColor) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function colorSelector(targetColor) {
  const selectedColor = getComputedStyle(targetColor).backgroundColor;
  return selectedColor;
}

function setColor(event) {
  const element = event.target;
  setSelectColor(targetColor);
  colorSelector(targetColor);
}

function starterPixelArt() {
  document.getElementById('color-palette')
  document.addEventListener('click', setColor);
}
