/* eslint-disable editorconfig/editorconfig */
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
  const preto = document.querySelector('#black');
  preto.className = 'color selected';
} inicialColor();
function name(params) {
  
}