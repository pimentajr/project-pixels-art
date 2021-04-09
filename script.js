const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const clearBtn = document.getElementById('clear-board');
var colorToPaint = document.getElementsByClassName('selected')[0];
function createPixels(line) {
  for (let column = 1; column <= 5; column += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.classList.add('empty');
    line.appendChild(pixel);
  }
}
function createRows() {
  for (let row = 1; row <= 5; row += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    createPixels(line);
  }
}
createRows();

colorPalette.addEventListener('click', function(event) {
  colorToPaint.classList.remove('selected');
  colorToPaint = event.target;
  colorToPaint.classList.add('selected');
})

pixelBoard.addEventListener('click', function(event) {
  event.target.className = 'pixel';
  event.target.classList.add(colorToPaint.classList[1]);
})

clearBtn.addEventListener('click', function() {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].className = 'pixel empty';
  }
})