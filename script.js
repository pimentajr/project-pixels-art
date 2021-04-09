const pixelIdentification = 'pixel-board';

function createPaletteContainer(num) {
  for (let index = 0; index < num; index += 1) {
    const palettesBox = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettesBox);
    palettesBox.className = 'color';
  }
}
createPaletteContainer(4);

function giveCollorPalettesBox() {
  const paletteColor = document.getElementsByClassName('color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = 'red';
  paletteColor[2].style.backgroundColor = 'yellow';
  paletteColor[3].style.backgroundColor = 'pink';
  paletteColor[0].classList.add('selected');
}
giveCollorPalettesBox();

function createPixels(size) {
  const pixelBox = document.getElementById(pixelIdentification);
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
createPixels(5);

function clickPalette() {
  const eventPalette = document.getElementById('color-palette');
  eventPalette.addEventListener('click', (e) => {
    const target = e.target;
    const color = document.getElementsByClassName('color');
    for (let index =0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (target.className === 'color') {
        target.classList.add('selected')
      }
    }
  })
}
clickPalette();