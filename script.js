const pixBoard = document.getElementById('pixel-board');

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  const pixLine = document.createElement('div');
  pixLine.className = 'pixLine';
  pixBoard.appendChild(pixLine);
  for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixLine.appendChild(pixelCell);
    pixelCell.style.backgroundColor = 'white';
  }
}
const colorPalette = document.querySelector('#color-palette');

function selectColor() {
  colorPalette.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      color.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();

pixBoard.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = selectedColor;
  }
});
