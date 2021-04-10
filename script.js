const arrayColors = [];

function getRandomColors() {
  // const numberColor = document.getElementsByClassName('color').length;
  for (let index = 0; index < 4; index += 1) {
    const rgbColor = {
      r: parseInt((Math.random() * 255), 10),
      g: parseInt((Math.random() * 255), 10),
      b: parseInt((Math.random() * 255), 10),
    };
    const randomRGB = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    arrayColors.push(randomRGB);
  }
  console.log(arrayColors);
  return arrayColors;
}

function createMatrix() {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    board.appendChild(line);
    for (let secondIndex = 0; secondIndex < 5; secondIndex += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}

function setSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function getPaletteColor() {
  const selectColor = document.getElementsByClassName('color');

  for (let index = 0; index < selectColor.length; index += 1) {
    selectColor[index].addEventListener('click', setSelected);
  }
}

function getColorPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const color = selectedColor.style.backgroundColor;
  const element = event.target;
  element.style.backgroundColor = color;
  console.log('getColorPixel');
}

function pixelColor() {
  const getPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].addEventListener('click', getColorPixel);
  }
}
function clearPixels() {
  const blankPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < blankPixels.length; index += 1) {
    blankPixels[index].style.backgroundColor = 'white';
  }
}

function gettingPixels() {
  const capturePixels = document.getElementById('clear-board');
  capturePixels.addEventListener('click', clearPixels);
}

window.onload = function load() {
  const getColors = document.getElementsByClassName('color');
  getColors[0].style.backgroundColor = 'black';
  getColors[0].classList.add('selected');
  let colorRemove = null;
  colorRemove = getRandomColors();
  for (let index = 1; index < getColors.length; index += 1) {
    getColors[index].style.backgroundColor = colorRemove[index];
  }
  createMatrix();
  getPaletteColor();
  pixelColor();
  gettingPixels();
};
