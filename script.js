// 4. O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento

function square(roww, column) {
  const tbl = document.getElementById('pixel-board');

  for (let index = 0; index < roww; index += 1) {
    const line = document.createElement('tr');

    for (let secondIndex = 0; secondIndex < column; secondIndex += 1) {
      const cells = document.createElement('td');
      cells.classList.add('pixel');
      line.appendChild(cells);
    }
    tbl.appendChild(line);
  }
}
square(5, 5);

// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels:
// Verifica se o elemento da cor preta possui, inicialmente, a classe selected

function definedColor(colors) {
  const palette = document.getElementById('color-palette');
  const boxClass = document.createElement('div');

  boxClass.style.backgroundColor = colors;
  boxClass.className = 'color';
    if (colors === 'black') {
      boxClass.classList.add('selected');
      palette.appendChild(boxClass);
    } 
}
definedColor('black');
definedColor('turquoise');
definedColor('purple');
definedColor('darkorange');