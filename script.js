const COLORS = [
  'rgb(191, 97, 106)',
  'rgb(235, 203, 139)',
  'rgb(163, 190, 140)',
];
// Doesn't count the fixed color.
const NUM_OF_COLORS = COLORS.length;

function setFixedColor(fixedColor) {
  let fixedColorBox = document.querySelector('.color.fixed');

  fixedColorBox.style.backgroundColor = fixedColor;
}

function setColors(colors) {
  let colorBoxes = document.querySelectorAll('.color:not(.fixed)');

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBoxes[index].style.backgroundColor = colors[index];
  }
  console.log(colorBoxes);
}

window.onload = () => {
  setFixedColor('black');
  setColors(COLORS);
};
