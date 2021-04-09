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

function pixelBoard(lines) {
  const divPixel = document.createElement('div');
  const divBlock = document.querySelector(lines);
  divPixel.className = 'pixel';
  divBlock.appendChild(divPixel);
  divPixel.style.backgroundColor = 'white';
}
for (let index = 0; index < 5; index += 1) {
  pixelBoard('#lines_1');
  pixelBoard('#lines_2');
  pixelBoard('#lines_3');
  pixelBoard('#lines_4');
  pixelBoard('#lines_5');
}

function paintPixelBoard(color) {
  const initialcolor = document.querySelectorAll('.pixel');
  let color = 'black'
  color.className = 'selected'
  for (let index = 0; index < initialcolor.length; index += 1) {
    initialcolor[index].addEventListener('click', colorblack);
    function colorblack() {
      initialcolor[index].style.backgroundColor = color;
    }
  }
}

