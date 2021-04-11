function createColunnLines() {
  for (let index = 0; index < 5; index += 1) {
    const colunn = document.createElement('div');
    colunn.className = 'colunn';
    document.querySelector('#pixel-board').appendChild(colunn);
    document.querySelectorAll('.colunn');
    for (let indice = 0; indice < 5; indice += 1) {
      const lines = document.createElement('div');
      lines.className = 'pixel';
      colunn.appendChild(lines);
    }
  }
} createColunnLines();

function inicialColor() {
  const black = document.querySelector('#black');
  black.className = 'color selected';
} inicialColor();

const paleta = document.querySelector('#color-palette');

function choosePalette() {
  paleta.addEventListener('click', (cor) => {
    const eventTarget = cor.target;  
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
} choosePalette();
