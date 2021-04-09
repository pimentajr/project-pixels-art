const title = document.querySelector('#title');
title.innerHTML = 'Paleta de Cores';

let colorPalette = document.querySelectorAll('#color-palette>div')
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].className = 'color';
}
let pixelColor = document.querySelectorAll('#pixel-board>div')
for (let i = 0; i < pixelColor.length; i += 1) {
  pixelColor[i].className = 'pixel';
}
let colorBlack = document.getElementsByClassName('color')[0];
colorBlack.className = 'selected color';