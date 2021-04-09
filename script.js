window.onload = function() {

  let boardSection = document.getElementById('pixel-board');
  let colorPalette = document.getElementById('color-palette');
  
  //Cria o quadro com os quadrados brancos;
  for (let index = 0; index < 25; index += 1) {
      let everyPixel = document.createElement('div');
      everyPixel.setAttribute('class', 'pixel');
      boardSection.appendChild(everyPixel);
  }

  
  colorPalette.addEventListener('click', changeSelectedColor);



}


function changeSelectedColor(event) {
  let allDivsColorPallete = document.getElementById('color-palette').children;
  for (let index = 0; index < allDivsColorPallete.length; index += 1) {
    console.log(allDivsColorPallete[index].setAttribute('class', 'color'));
  }
  event.target.className += ' selected';
}

