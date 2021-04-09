// Cria e colore a paleta
function createColor(boxColor) {
  const palette = document.querySelector('#color-palette');
  const box = document.createElement('div');

  box.style.backgroundColor = boxColor;
  box.className = ('color');

  palette.appendChild(box);
}

createColor('black');
createColor('red');
createColor('blue');
createColor('yellow');

// Preenche uma grid
function populateGrid(size) {
  const pixelBox = document.querySelector('#pixel-board');

  for (let index = 0; index < size; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBox.appendChild(pixelColumn);

    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelLine = document.createElement('div');
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}

populateGrid(5);

/*

*/
