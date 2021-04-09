function setColorPalette() {
  let color = document.querySelectorAll('.color');
  let arrColors = ['black', 'red', 'blue', 'yellow'];

  for (let index in arrColors) {
    color[index].style.backgroundColor = arrColors[index];
  }
  console.log(color)
}

setColorPalette();

