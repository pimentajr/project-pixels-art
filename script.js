let creationFirst = document.createElement('div');
let creationPalette = document.querySelector('#color-palette');
creationPalette.appendChild(creationFirst);
for (let index = 0; index < 10; index += 1) {
  let creationFirstTd = document.createElement('td');
  creationFirstTd.className = 'color';
  creationFirst.appendChild(creationFirstTd);
}
document.querySelector('.color').className += ' selected';

let counter = 5;

for (let index = 0; index < counter; index += 1) {
  let createTr = document.createElement('div');
  createTr.className = 'pixeld';
  let theTable = document.querySelector('#pixel-board');
  theTable.appendChild(createTr);
  for (let count = 0; count < counter; count += 1) {
    let createSecondTd = document.createElement('td');
    createSecondTd.className = 'pixel';
    createTr.appendChild(createSecondTd);
  }
}
let corPaleta = document.querySelectorAll('.color');

let selectedColor = (event) => {
  let corEscolhida = document.querySelector('.selected');
  corEscolhida.className = 'color';
  let evento = event;
  evento.target.className += ' selected';
};

let selectedPixel = (event) => {
  let evento = event;
  evento.target.className = 'pixel pselected';
  let colorSelected = document.querySelector('.selected');
  let style = getComputedStyle(colorSelected);
  let bgColorSelected = style.backgroundColor;
  evento.target.style.backgroundColor = bgColorSelected;
};

for (let index = 0; index < corPaleta.length; index += 1) {
  corPaleta[index].addEventListener('click', selectedColor);
}

let pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', selectedPixel);
}

let clearButton = document.querySelector('#Delete');
let allPixel = document.querySelectorAll('.pixel');

clearButton.addEventListener('click', () => {
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
});