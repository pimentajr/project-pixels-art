const colorPalette = document.getElementById('color-palette');
const blackColor = document.getElementById('blackColor');
const randomC1 = document.getElementById('randomC1');
const randomC2 = document.getElementById('randomC2');
const randomC3 = document.getElementById('randomC3');
const buttonColors = document.getElementById('paletaButton');
const pBlock = document.querySelector('#pixel-board');
const pColons = document.getElementsByClassName('colon');
const pixeis = document.getElementsByClassName('pixel');
const blankButton = document.getElementById('clear-board');

function randomRGB() {
  const random = parseInt((Math.random() * 255), 10);
  const random1 = parseInt((Math.random() * 255), 10);
  const random2 = parseInt((Math.random() * 255), 10);
  const rgb = `rgb(${random}, ${random1}, ${random2})`;
  return rgb;
}

function randomColors() {
  const rB1 = randomRGB();
  const rB2 = randomRGB();
  const rB3 = randomRGB();
  if (rB1 !== rB2 || rB2 !== rB3 || rB3 !== rB1) {
    randomC1.style.backgroundColor = rB1;
    randomC2.style.backgroundColor = rB2;
    randomC3.style.backgroundColor = rB3;
  }
  blackColor.style.backgroundColor = 'rgb(0, 0, 0)';
}

function createColons(colonsNumber) {
  for (let index = 0; index < colonsNumber; index += 1) {
    const colon = document.createElement('div');
    colon.className = 'colon';
    pBlock.appendChild(colon);
  }
}

function createLines(linesNumber) {
  for (let index = 0; index < pColons.length; index += 1) {
    const element = pColons[index];
    for (let index2 = 0; index2 < linesNumber; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      element.appendChild(pixel);
    }
  }
}

function creatBlock(numbers) {
  createColons(numbers);
  createLines(numbers);
}

function pixelBackground(color) {
  for (let index = 0; index < pixeis.length; index += 1) {
    const pixelIndex = pixeis[index];
    pixelIndex.style.backgroundColor = color;
  }
}

function colorSelect(colorS) {
  const colorSe = colorS;
  colorSe.className = 'color selected';
}

function allBlank() {
  for (let index = 0; index < pixeis.length; index += 1) {
    const pixelI = pixeis[index];
    pixelI.style.backgroundColor = 'white';
  }
}

blankButton.addEventListener('click', allBlank);

buttonColors.addEventListener('click', randomColors);

colorPalette.addEventListener('click', function select(origin) {
  const colorOrigin = origin.target;
  const selected = document.getElementsByClassName('selected')[0];
  selected.className = 'color';
  colorOrigin.className = 'color selected';
});

pBlock.addEventListener('click', function colored(origin) {
  const selected = document.getElementsByClassName('selected')[0];
  const colorSelected = selected.style.backgroundColor;
  const pixelOrigin = origin.target;
  pixelOrigin.style.backgroundColor = colorSelected;
})

window.onload = function reset() {
  randomColors();
  creatBlock(5);
  pixelBackground('white');
  colorSelect(blackColor);
};
