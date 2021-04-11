const paletList = document.querySelector('#color-palette');

function addItemPalette() {
  for (let index = 0; index < 4; index += 1) {
    const colorPalet = document.createElement('li');
    colorPalet.className = 'color';
    paletList.appendChild(colorPalet);
  }
}
addItemPalette();

const paletteItem = document.querySelectorAll('.color');

function addcolorPalette(colors) {
  for (let index = 0; index < paletteItem.length; index += 1) {
    const color = paletteItem[index];
    color.style.backgroundColor = colors[index];
  }
}
addcolorPalette(['black', 'red', 'blue', 'yellow']);

const board = document.querySelector('#pixel-board');

function boardPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixelItem = document.createElement('li');
    pixelItem.className = 'pixel';
    board.appendChild(pixelItem);
  }
}
boardPixel();

function selectedPaletteBlack() {
  for (let index = 0; index < paletteItem.length; index += 1) {
    const item = paletteItem[index];
    if (item.style.backgroundColor === 'black') {
      item.className = 'color selected';
    }
  }
}
selectedPaletteBlack();

function paletteSelected() {
  for (let index = 0; index < paletteItem.length; index += 1) {
    const item = paletteItem[index];

    item.addEventListener('click', (events) => {
      const selectedColor = document.querySelector('.selected');
      if (item.className === 'color') {
        selectedColor.classList.remove('selected');
        events.target.classList.add('selected');
      }
    });
  }
}
paletteSelected();

function pixelColors() {
  const boardPixels = document.querySelector('#pixel-board');

  boardPixels.addEventListener('click', (colors) => {
    const getColors = colors;
    const selectedColor = document.querySelector('.selected');
    if (selectedColor !== null && getColors.target.className !== 'board-pixel') {
      getColors.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
}
pixelColors();
