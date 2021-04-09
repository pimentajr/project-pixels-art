window.onload = function () {
  const titulo = document.getElementById('title');
  titulo.innerText = 'Paleta de Cores';

  const divColors = document.querySelectorAll('.color');

  function paleteColors () {
    for (let index = 0; index < divColors.length; index += 1) {
      const colorsValue = divColors[index].id;
      divColors[index].style.backgroundColor = colorsValue;
    }
  }
  paleteColors();

  function createBoardPixel(parent, line, column) {
    for (let indexLine = 1; indexLine <= line; indexLine += 1) {
      const pixelTr = document.createElement('tr');
      pixelTr.class = 'pixel-board-line';
      for (let indexColumn = 1; indexColumn <= column; indexColumn += 1) {
        const pixelTd = document.createElement('td');
        pixelTd.className = 'pixel';
        pixelTr.appendChild(pixelTd);
      }
      parent.appendChild(pixelTr);
    }
  }
  const pixelBoard = document.querySelector('#pixel-board');
  createBoardPixel(pixelBoard, 5, 5);
};
