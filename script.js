function fillColors (colorPalette) {
  const paletteContainer = document.getElementById('color-palette');

  const paletteElements = paletteContainer.rows[0].children;

  if (colorPalette.length !== paletteElements.length) {
    throw new Error('Palette passed is not the same length as the table element');
  }

  for (let i = 0; i < colorPalette.length; i++) {
    paletteElements[i].style.backgroundColor = colorPalette[i];
  }

  paletteElements[0].classList.add('selected');
}

fillColors(
  ['black', 'red', 'green', 'blue']
);

function createBoard (rows, columns) {
  const board = document.getElementById('pixel-board');

  for (let i = 0; i < rows; i += 1) {
    let row = document.createElement('tr');
    
    for (let j = 0; j < columns; j += 1) {
      let cell = document.createElement('td');
      cell.classList.add('pixel');
      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

createBoard(5, 5);