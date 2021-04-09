window.onload = function() {
  let colorMenu = document.getElementById('color-palette');
  let colors = ['black', 'red', 'green', 'blue'];
  for (index = 0; index < colors.length; index += 1) {
    let colorSelector = document.createElement('div');
    colorSelector.className = 'color';
    colorSelector.id = colors[index];
    colorSelector.style.backgroundColor = colors[index];
    colorMenu.appendChild(colorSelector);
  }
};
