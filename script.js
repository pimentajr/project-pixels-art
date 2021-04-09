function colorPallet(color) {
  const spanPallet = document.createElement('span');
  const spanBlock = document.querySelector('#color-palette');
  spanPallet.className = 'color';
  spanBlock.appendChild(spanPallet);
  spanPallet.style.backgroundColor = color;
}
colorPallet('black');
colorPallet('red');
colorPallet('green');
colorPallet('blue');

function pixelBoard() {
  const divPixel= document.createElement('div');
  const divBlock = document.querySelector('#pixel_board');
  let pixelCreator = divBlock.appendChild(divPixel)
  divPixel.className = 'pixel';
  divPixel.style.backgroundColor = 'white';
}
function pixelBoarIn() {
for (let index = 0; index < 25; index += 1) {
  pixelBoard()
}
}
pixelBoarIn()

