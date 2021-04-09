const colorPalette = document.querySelector('#color-palette');

// Cria uma linha
function createLine(className) {
  const line = document.createElement('div');
  line.className = className;
  return line;
}

// Preenche uma div
function populateDiv(div, className, qtd) {
  for (let lines = 1; lines <= qtd; lines += 1) {
    const line = createLine(className);
    div.appendChild(line);
  }
}

populateDiv(colorPalette, 'palette', 1);

// Cria uma caixa com base nas diferentes cores
function createBox(boxColor) {
  const box = document.createElement('div');

  box.style.backgroundColor = boxColor;
  box.className = 'color';

  return box;
}

// Colore as caixas
function createColor(color) {
  const container = document.querySelector('.palette');
  const element = createBox(color);

  element.classList.add('palette-color');

  container.appendChild(element);
}

createColor('red');
createColor('blue');
createColor('yellow');
createColor('green');
createColor('#34f67a');
createColor('rgb(243, 104, 012)');
