window.onload = function () {
  const colorPalette = document.getElementById('color-palette');
  const arrColors = ['black', 'blue', 'magenta', 'yellow'];
  const pixelSquare = document.getElementById('pixel-board');
  let pixelSquareSize = 25;

  for (let index = 0; index < arrColors.length; index += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.classList.add(arrColors[index]);
    colorPixel.style.backgroundColor = arrColors[index];
    colorPixel.style.margin = '5px';
    colorPixel.style.border = 'solid 1px black';
    colorPalette.appendChild(colorPixel);
  }

  for (let index = 0; index < Math.sqrt(pixelSquareSize); index += 1) {   
    pixelSquare.style.display = 'table';
    const pixelRow = document.createElement('div');
    
    for (let index1 = 0; index1 < Math.sqrt(pixelSquareSize); index1 += 1) {      
      const pixel = document.createElement('div');
      pixelRow.style.display = 'table-row';
      pixel.className = 'pixel';

      pixel.style.width = '40px';
      pixel.style.height = '40px';

      pixel.style.display = 'table-cell';

      pixel.style.border = 'solid 1px black';

      pixelRow.appendChild(pixel);        
    }

    pixelSquare.appendChild(pixelRow);
  }
};
