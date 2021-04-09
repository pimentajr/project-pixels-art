const body = document.querySelector('body');
const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';
body.appendChild(title);

const colorPalette = document.createElement('div');
colorPalette.setAttribute('id', 'color-palette');
body.appendChild(colorPalette);
const differentColors = 4;
for (let index = 1; index <= differentColors; index += 1) {
  let colorBox = document.createElement('div');
  colorBox.classList.add('color');
  const maxColorValue = 16777215;
  randomColor = Math.floor(Math.random()*maxColorValue).toString(16);
  colorBox.style.backgroundColor = '#' + randomColor;
  colorPalette.appendChild(colorBox);
}
