// Variables
const colorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
console.log(colorPalette);
// Assignments

// Functions

for (let index = 0; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = colors[index].id;
}
