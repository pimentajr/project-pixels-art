function createTableColor(colorPixel) {
  for (let index = 0; index < colorPixel; index += 1) {
    let colorPallete = document.getElementById('color-palette');
    let tableColor = document.createElement('div');
    colorPallete.appendChild(tableColor);
    tableColor.className = 'color';
  }  
}

  createTableColor(4);

function boxColor() {
  let colorPicker = document.getElementsByClassName('color');
  colorPicker[0].style.backgroundColor = 'black';
  colorPicker[1].style.backgroundColor = '#edf5e1';
  colorPicker[2].style.backgroundColor = '#5cdb95';
  colorPicker[3].style.backgroundColor = '#379663'; 
}

  boxColor();
