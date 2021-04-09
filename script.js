let title = document.querySelector('#title');
title.innerHTML = 'Paleta de Cores';

let colorPalette = document.getElementsByTagName('div');
for (let index = 1; index < 5; index += 1) {
  colorPalette[index].className = 'color';
}

let colorPixel = document.getElementsByTagName('div');
for (let index = 6; index < 31; index += 1) {
  colorPalette[index].className = 'pixel';
}