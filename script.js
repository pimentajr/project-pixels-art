// global varible
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function createColorPalette() {
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.marginRight = '5px';
    colorPalette.appendChild(div);
  }
}
createColorPalette();

function createPixels() {
  const pixels = 25;
  for (let i = 0; i < pixels; i += 1) {
    const divPixels = document.createElement('div');
    divPixels.className = 'pixel';
    divPixels.style.marginRight = '3px';
    pixelBoard.appendChild(divPixels);
  }
}
createPixels();

window.onload = function selecteDivs() {
  const div = document.querySelector('.color');
  div.classList.add('selected');
};

function switchSelectedColor() {
  const colorDiv = document.querySelectorAll('.color');
  for (let i = 0; i < colorDiv.length; i += 1) {
    colorDiv[i].addEventListener('click', function() {
      if (!colorDiv[i].classList.contains('selected')) {
        for (let j = 0; j < colorDiv.length; j += 1) {
          colorDiv[j].classList.remove('selected');
        }
        colorDiv[i].classList.add('selected');
      }
    });
  }
}
switchSelectedColor();

function setColor() {
  const pixelsArr = pixelBoard.childNodes;
  for (let i = 0; i < pixelsArr.length; i += 1) {
    pixelsArr[i].addEventListener('click', function() {
      const pixels = pixelsArr[i];
      const element = document.querySelector('.selected');
      const propBckGrd = window.getComputedStyle(element, null).getPropertyValue('background-color');
      pixels.style.backgroundColor = propBckGrd;
    });
  }
}
setColor();
