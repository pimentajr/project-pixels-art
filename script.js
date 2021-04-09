function creatPallete() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'red', 'orange', 'yellow'];

  for (let index = 0; index < colors.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
    colorPalette.appendChild(createDiv);

    if (index === 0) {
      createDiv.classList.add('selected');
    }
  }
}
creatPallete();

function pixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let i = 0; i < 5; i += 1) {
    const lines = document.createElement('div');
    // lines.className = 'pixel';
    pixelBoard.appendChild(lines);

    for (let j = 0; j < 5; j += 1) {
      const columns = document.createElement('div');
      columns.className = 'pixel';
      lines.appendChild(columns);
    }
  }
}
pixelBoard();

function addClassSelect() {
  const selectColor = document.querySelector('#color-palette')
  selectColor.addEventListener('click', (event) => {
    let select = document.querySelector('.selected');
    event.target.classList.add('selected');
    if (select) {
      select.classList.remove('selected');
      select = document.querySelector('.selected');
    }
  });
}
addClassSelect();

function addColorPixel(){
  let pixelSelect = document.querySelector('#pixel-board');
  pixelSelect.addEventListener('click', (event) => {
    let colorSelect = document.querySelector('.selected')
    event.target.style.backgroundColor = colorSelect.style.backgroundColor;
  });
}
addColorPixel();

function clearPixel() {
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((item) => {
      item.style.backgroundColor = 'white';
    });
  });
}
clearPixel();
