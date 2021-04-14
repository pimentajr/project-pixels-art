function createColorPalette() {
  const colorPalette = document.getElementById('color-palette');

  const colorBlack = document.createElement('div');
  colorBlack.className = 'color';
  colorBlack.style.backgroundColor = 'black';
  colorPalette.appendChild(colorBlack); 

  const secondColor = document.createElement('div');
  secondColor.className = 'color';
  secondColor.style.backgroundColor = 'rgb(204, 204, 102)';
  colorPalette.appendChild(secondColor);

  const thirdColor = document.createElement('div');
  thirdColor.className = 'color';
  thirdColor.style.backgroundColor = 'rgb(121, 140, 53)';
  colorPalette.appendChild(thirdColor);

  const forthColor = document.createElement('div');
  forthColor.className = 'color';
  forthColor.style.backgroundColor = 'rgb(72, 89, 34)';
  colorPalette.appendChild(forthColor);
}

createColorPalette();


const pixelBoard = document.getElementById('pixel-board');

function createColumnLines() {
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let i = 0; i < 5; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
  }
}
createColumnLines();
