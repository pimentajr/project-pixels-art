const title = document.querySelector('#title');
title.innerHTML = 'Paleta de Cores';

function makeColorPalete(classes) {
  const colors = document.createElement('li');
  colors.className = classes;
  return colors;
}
const colorPalette = document.querySelector('#color-palette');
colorPalette.appendChild(makeColorPalete('color selected preto'));
colorPalette.appendChild(makeColorPalete('color coral'));
colorPalette.appendChild(makeColorPalete('color violeta'));
colorPalette.appendChild(makeColorPalete('color aqua'));

const makePixelBoard = document.querySelector('#pixel-board');
for (let index = 0; index < 5; index += 1) {
  const linha = document.createElement('tr');
  linha.className = 'pixel branco';
  makePixelBoard.appendChild(linha);
  for (let felipex = 0; felipex < 5; felipex += 1) {
    const coluna = document.createElement('td');
    coluna.className = 'pixel branco';
    makePixelBoard.appendChild(coluna);
  }
}

function paintPixel(event) {
  const cell = event;
  const selectedColor = document.querySelector('.selected');
  if (cell.target.className === 'pixel') {
    cell.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}
makePixelBoard.addEventListener(paintPixel('click', paintPixel));
