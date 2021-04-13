const tableSection = document.createElement('section');
document.body.appendChild(tableSection);
tableSection.id = 'pixel-board';

function createPixel() {
  const getSection = document.querySelector('#pixel-board');
  const pixelSize = 5;
  for (let index = 0; index < pixelSize * pixelSize; index += 1) {
    const divs = document.createElement('div');
    divs.className = 'pixel';
    getSection.appendChild(divs);
  }
}

function applyColor() {
  const getSession = document.querySelectorAll('#color-palette>div');
  const backgroundColor = ['black', 'red', 'blue', 'pink'];
  for (let index = 0; index < getSession.length; index += 1) {
    for (let j = 0; j < backgroundColor.length; j += 1) {
      if (index === j) {
        getSession[index].style.backgroundColor = backgroundColor[j];
      }
    }
  }
}
applyColor();

createPixel();

const getPixels = document.getElementsByTagName('td');
for (let index = 0; index < getPixels.length; index += 1) {
  getPixels[index].className = 'pixel';
}

window.onload = function () {
  const getColor = document.querySelector('.color');
  getColor.className += ' selected';
};

function addClassSelected() {
  const paletaCores = document.querySelector('#color-palette');
  paletaCores.addEventListener('click', (actionEvent) => {
    if (actionEvent.target.className === 'color') {
      const newClass = document.querySelector('.selected');
      newClass.className = 'color';
      actionEvent.target.className += ' selected';
    }
  });
}

addClassSelected();

function colorPixelChange() {
  const getPixelBoard = document.querySelector('#pixel-board');
  getPixelBoard.addEventListener('click', (colorsChange) => {
    const getPaletaCor = document.querySelector('.selected').style.backgroundColor;
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      if (pixels[index] === colorsChange.target) {
        pixels[index].style.backgroundColor = getPaletaCor;
      }
    }
  });
}

colorPixelChange();
