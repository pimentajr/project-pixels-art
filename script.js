// Cria e colore a paleta
function createColor(boxColor) {
  const palette = document.querySelector('#color-palette');
  const box = document.createElement('div');
  box.style.backgroundColor = boxColor;
  box.className = ('color');
  if (boxColor === 'black') box.classList.add('selected');
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

// Muda a classe selected
function clickPalette() {
  const eventPalette = document.getElementById('color-palette');
  eventPalette.addEventListener('click', (selectedColor) => {
    const eventTarget = selectedColor.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
}
clickPalette();

// Colore o pixel
function colorGrid() {
  const eventGrid = document.getElementById('pixel-board');
  eventGrid.addEventListener('click', (paintPixel) => {
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    const eventTarget = paintPixel.target;
    if (eventTarget.className === 'pixel') {
      eventTarget.style.backgroundColor = colorSelected;
    }
  });
}
colorGrid();
