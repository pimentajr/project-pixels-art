const pixelColor = document.querySelectorAll('.color');
function setAsSelected(event) {
  const pixelClicked = event;
  document.querySelectorAll('.selected')[0].className = 'color';
  pixelClicked.target.className = 'color selected';
}
for (let index = 0; index < pixelColor.length; index += 1) {
  pixelColor[index].addEventListener('click', setAsSelected);
}

function paintPixel(event) {
  const pixelToChange = event.target;
  pixelToChange.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
}
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
}

function clearPixels() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearPixels);
