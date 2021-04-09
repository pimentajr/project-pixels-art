function createTableColor(colorPixel) {
  for (index = 0; index < colorPixel; index += 1) {
    const colorPallete = document.getElementById('color-palette');
    const tableColor = document.createElement('div');
    colorPallete.appendChild(tableColor);
    tableColor.className = 'color';
  }
  colorPicker = document.getElementsByClassName('color');
  colorPicker[0].style.backgroundColor = 'black';
  colorPicker[1].style.backgroundColor = '#edf5e1';
  colorPicker[2].style.backgroundColor = '#5cdb95';
  colorPicker[3].style.backgroundColor = '#379663';

}
createTableColor(4);