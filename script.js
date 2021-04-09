const colorPalette = document.querySelector('#color-palette');
const colorPaletteChildren = [...colorPalette.children];
const pixelBoard = document.querySelector('#pixel-board');
const DEFAULT_COLOR = 'black';
let selectedColor = null;

function updateSelectedElement(e) {
  colorPaletteChildren.forEach((child) => {
    child.classList.remove('selected');
  });
  e.target.classList.add('selected');
}

colorPalette.addEventListener('mousedown', (e) => {
  const element = e.target;
  selectedColor = getComputedStyle(element).getPropertyValue(
    'background-color',
  );
  updateSelectedElement(e);
});

pixelBoard.addEventListener('click', (e) => {
  e.target.style.backgroundColor = selectedColor || DEFAULT_COLOR;
});
