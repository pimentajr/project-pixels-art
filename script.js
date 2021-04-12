const paletteColor = document.getElementsByClassName('color');
paletteColor[0].style.backgroundColor = 'black';
paletteColor[1].style.backgroundColor = 'darkgreen';
paletteColor[2].style.backgroundColor = 'purple';
paletteColor[3].style.backgroundColor = 'darkblue';
paletteColor[0].classList.add('selected');

function addAndRemoveColors() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    const colorTarget = event.target;
    const classColor = document.getElementsByClassName('color');
    for (let indexColor = 0; indexColor < classColor.length; indexColor += 1) {
      classColor[indexColor].classList.remove('selected');
      if (colorTarget.className === 'color') {
        colorTarget.classList.add('selected');
      }
    }
  });
}
addAndRemoveColors();

function paintPixels() {
  const pickPixels = document.getElementById('pixel-board');
  pickPixels.addEventListener('click', (eventColor) => {
    const pickColor = eventColor.target;
    const whereIsSelected = document.querySelector('.selected');
    if (pickColor.className === 'pixel') {
      pickColor.style.backgroundColor = whereIsSelected.style.backgroundColor;
    }
  });
}
paintPixels();
