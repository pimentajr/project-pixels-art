window.onload = function start() {
  const boardSection = document.getElementById('pixel-board');
  const colorPalette = document.getElementById('color-palette');
  const btnRest = document.getElementById('clear-board');

  // Cria o quadro com os quadrados brancos;
  for (let index = 0; index < 25; index += 1) {
    const everyPixel = document.createElement('div');
    everyPixel.setAttribute('class', 'pixel');
    boardSection.appendChild(everyPixel);
  }

  colorPalette.addEventListener('click', (event) => {
    const allDivsColorPallete = document.getElementById('color-palette').children;
    for (let index = 0; index < allDivsColorPallete.length; index += 1) {
      allDivsColorPallete[index].setAttribute('class', 'color');
    }
    event.target.className += ' selected';
  });
  boardSection.addEventListener('click', (event) => {
    const colorSelected = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
    event.target.style.backgroundColor = colorSelected;
  });
  btnRest.addEventListener('click', () => {
    const AllDivsPixels = document.getElementById('pixel-board').children;
    for (let index = 0; index < AllDivsPixels.length; index += 1) {
      AllDivsPixels[index].style.backgroundColor = 'white';
    }
  });
};
