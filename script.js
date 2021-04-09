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
  const creatPixel = document.createElement('div');
  creatPixel.className = 'pixel';
  pixelBoard.appendChild(creatPixel);
}
pixelBoard();

function addClassSelect() {
  const selectColor = document.querySelector('#color-palette')
  selectColor.addEventListener('click', function (event) {
    let select = document.querySelector('.selected');
    event.target.classList.add('selected');
    if (select) {
      select.classList.remove('selected');
      select = document.querySelector('.selected');
    }
  });
}
addClassSelect()