const listOfColors = ['black', 'lightgreen', 'lightskyblue', 'khaki'];
const colorsPalette = document.querySelector('#color-palette');

function createBox(arrayColors) {
  for (let index = 0; index < arrayColors.length; index += 1) {
    const box = document.createElement('div');
    box.className = 'color';
    box.style.background = listOfColors[index];
    colorsPalette.appendChild(box);
  };
};

createBox(listOfColors);
