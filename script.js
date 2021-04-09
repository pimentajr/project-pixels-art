window.onload = function () {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'blue', 'yellow', 'magenta'];
  for (let index = 0; index < 4; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    colorBox.style.backgroundColor = colors[index];
    colorPalette.appendChild(colorBox);
  }
};
