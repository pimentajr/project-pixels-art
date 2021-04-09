window.onload = function() {

  function creatPalette(colorTitle){
    let colorPalette = document.querySelector('#color-palette');
    for (let index = 0; index < colorTitle.length; index += 1){
      let colorBox = document.createElement('div');
      colorBox.className = colorTitle[index] + ' color';
      colorBox.style.backgroundColor = colorTitle[index];
      console.log(colorBox);
      colorPalette.appendChild(colorBox);
    }
  }

  let colors = ['black', 'red', 'blue', 'green']; 
  creatPalette(colors);
}


