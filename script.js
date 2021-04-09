const FIXED_COLOR = 'black';
const COLORS = [
  'rgb(191, 97, 106)',
  'rgb(235, 203, 139)',
  'rgb(163, 190, 140)',
];
// Doesn't count the fixed color.
const NUM_OF_COLORS = COLORS.length;

function initializePalette() {
  const colorPalette = document.getElementById('color-palette');
  const fixedColorBox = document.createElement('div');
  let colorBox;

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
  fixedColorBox.classList.add('color', 'fixed');
  colorPalette.appendChild(fixedColorBox);

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBox = document.createElement('div');
    colorBox.classList.add('color');
    colorBox.style.backgroundColor = COLORS[index];
    colorPalette.appendChild(colorBox);
  }
}

function setFixedColor() {
  const fixedColorBox = document.querySelector('.color.fixed');

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
}

function setColors() {
  const colorBoxes = document.querySelectorAll('.color:not(.fixed)');

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBoxes[index].style.backgroundColor = COLORS[index];
  }
}

window.onload = () => {
  initializePalette();
  setFixedColor();
  setColors();
};
