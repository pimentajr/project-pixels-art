const pixelBoard = document.getElementById('pixel-board');
const palette = document.getElementById('color-palette');

function setPixelColor(color) {
  pixelBoard.addEventListener('click', function (e) {
    e.target.style.backgroundColor = color;
  });
}

setPixelColor('black');

function selectThis(e) {
  if (e.target.classList[0] === 'color') {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add('selected');
    const selectedColor = e.target.classList[1];
    setPixelColor(selectedColor);
  }
}

palette.addEventListener('click', selectThis);
