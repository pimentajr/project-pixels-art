const paletteBoard = document.getElementById('color-palette');

const colorsPalette = (paletteBoard.rows[0].children);

for (let i = 0; i < colorsPalette.length; i += 1) {
  colorsPalette[i].addEventListener('click', () => {
    const nowSelected = document.querySelector('.selected');
    nowSelected.classList.remove('selected');
    colorsPalette[i].classList.add('selected');
  });
}

const pixelTable = document.getElementById('pixel-board');

for (let i = 0; i < pixelTable.children[0].children.length; i += 1) {
  const tableLine = pixelTable.children[0].children;
  const tableElements = tableLine[i].children;

  for (let j = 0; j < tableElements.length; j += 1) {
    tableElements[j].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      tableElements[j].style.backgroundColor = selectedColor;
    });
  }
}

const myButton = document.getElementById('clear-board');
const tableLineClear = document.querySelectorAll('.pixel');

myButton.addEventListener('click', () => {
  for (let i = 0; i < tableLineClear.length; i += 1) {
    tableLineClear[i].style.backgroundColor = 'white';
  }
});
