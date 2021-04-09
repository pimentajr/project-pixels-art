window.onload = function() {

  let boardSection = document.getElementById('pixel-board');
  let colorPalette = document.getElementById('color-palette');
  let btnRest = document.getElementById('clear-board');
  
  //Cria o quadro com os quadrados brancos;
  for (let index = 0; index < 25; index += 1) {
      let everyPixel = document.createElement('div');
      everyPixel.setAttribute('class', 'pixel');
      boardSection.appendChild(everyPixel);
  }

  
  colorPalette.addEventListener('click', changeSelectedColor);

  boardSection.addEventListener('click', changePixelColor);

  btnRest.addEventListener('click', clearBoard);

}

function changeSelectedColor(event) {
  let allDivsColorPallete = document.getElementById('color-palette').children;
  for (let index = 0; index < allDivsColorPallete.length; index += 1) {
    allDivsColorPallete[index].setAttribute('class', 'color');
  }
  event.target.className += ' selected';
}

function changePixelColor(event) {
  let colorSelected = window.getComputedStyle(document.querySelector('.selected'));
  event.target.style.backgroundColor =  colorSelected.backgroundColor;
}

function clearBoard() {
  let AllDivsPixels = document.getElementById('pixel-board').children;
  for (let index = 0; index < AllDivsPixels.length; index += 1) {
    AllDivsPixels[index].style.backgroundColor = 'white';
    
  }
}