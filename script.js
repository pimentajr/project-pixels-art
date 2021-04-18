const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function color1Selector(color) {
  color1.style.backgroundColor = color;
}

function color2Selector(color) {
  color2.style.backgroundColor = color;
}

function color3Selector(color) {
  color3.style.backgroundColor = color;
}

function color4Selector(color) {
  color4.style.backgroundColor = color;
}
color1Selector('black');
color2Selector('green');
color3Selector('red');
color4Selector('yellow');

const pixelBoard = document.querySelector('#pixel-board');
for (let index = 1; index < 26; index += 1) {
  let block = document.createElement('div');
  block.className = 'pixel';
  block.id = 'pixel' + index;

  pixelBoard.appendChild(block);
}
