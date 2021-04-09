const colorPalette = document.querySelector('#color-palette');

function creatPallete() {
  let colors = ['black', 'red', 'orange', 'yellow'];

  for (let index = 0; index < colors.length; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
    colorPalette.appendChild(createDiv);
  }
}
creatPallete();