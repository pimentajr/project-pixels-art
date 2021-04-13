// Variables
// const colorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
// const pixelGet = document.getElementsByClassName('pixel');
// Assignments

// Functions

for (let index = 0; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = colors[index].id;
}

(function createPixel() {
  for (let index = 0; index < 5; index += 1) {
    const createDivPixelRow = document.createElement('tr');
    pixelBoard.appendChild(createDivPixelRow);
    createDivPixelRow.classList.add('pixel-row');
    for (let j = 0; j < 5; j += 1) {
      const createDivPixelColum = document.createElement('td');
      createDivPixelRow.appendChild(createDivPixelColum);
      createDivPixelColum.classList.add('pixel', 'white');
    }
  }
}());
