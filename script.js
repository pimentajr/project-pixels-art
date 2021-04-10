function createBoxesDiv() {
  const selectPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDivs = document.createElement('div');
    selectPalette.appendChild(createDivs);
    createDivs.classList.add('color');
  }
  const arrayOfColors = ['black', 'blue', 'purple', 'red'];
  const selectDivs = document.querySelectorAll('.color');
  selectDivs.forEach((box, index) => {
    const div = box; div.style.backgroundColor = arrayOfColors[index];
  });
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}
createBoxesDiv();

function addPixels(size) {
  const createPixels = document.createElement('section');
  createPixels.id = 'pixel-board';
  document.body.appendChild(createPixels);
  const selectPixels = document.querySelector('#pixel-board');
  for (let index = 0; index < size; index += 1) {
    const createPixelsRow = document.createElement('div');
    selectPixels.appendChild(createPixelsRow);
    createPixelsRow.classList.add('pixel');
    createPixelsRow.innerText = 'Row';
    for (let indice = 1; indice < size; indice += 1) {
      const createPixelsColumn = document.createElement('div');
      selectPixels.appendChild(createPixelsColumn);
      createPixelsColumn.classList.add('pixel');
      createPixelsColumn.innerText = 'Column';
    }
  }
}
addPixels(5);
  