window.onload = function initial() {
  const initialColor = document.querySelector('.black');
  initialColor.classList.add('selected');
};

const colorPalette = document.querySelectorAll('.color');
for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', function colorPaletteSelected(event) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

function pixelColor() {
  let pixel = document.getElementById('pixel-board');
  pixel.addEventListener('click', function pixelClick(event) {
    const selected = document.querySelector('.selected');
    pixel = event.target;
    pixel.style.backgroundColor = selected.classList[1];
  });
}
pixelColor();

function clearbutton() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', function styleremove() {
    const pixelStyle = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelStyle.length; index += 1) {
      pixelStyle[index].style.backgroundColor = null;
    }
  });
}
clearbutton();
