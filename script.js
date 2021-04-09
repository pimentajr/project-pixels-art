window.onload = function () {
  const colorPalette = document.getElementById('color-palette');
  const arrColors = ['black', 'blue', 'magenta', 'yellow'];
  const pixelSquad = document.getElementById('pixel-board');
  let pixelSquadSize = 25;

  for (let index = 0; index < arrColors.length; index += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.classList.add(arrColors[index]);
    colorPixel.style.backgroundColor = arrColors[index];
    colorPixel.style.margin = '5px';
    colorPixel.style.border = 'solid 1px black';
    colorPalette.appendChild(colorPixel);
  }

  for (let index = 0; index < Math.sqrt(pixelSquadSize); index += 1) {
    // const pixel = document.createElement('div');
    // pixel.className = 'pixel';
    // // colorPixel.classList.add(arrColors[index]);
    // // colorPixel.style.backgroundColor = arrColors[index];
    // // colorPixel.style.margin = '5px';
    // pixel.style.border = 'solid 1px black';
    // pixelSquad.appendChild(pixel);
    let arrPixels = [];

    for (let index2 = 1; index2 < Math.sqrt(pixelSquadSize); index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      // colorPixel.classList.add(arrColors[index]);
      // colorPixel.style.backgroundColor = arrColors[index];
      // colorPixel.style.margin = '5px';
      pixel.style.border = 'solid 1px black';
      arrPixels.push(pixel);
      pixelSquad.appendChild(arrPixels);
    }
  }
};
