const paletteContainer = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

let selectedColor;

function createBoard (rows, columns) {
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

function fillPaletteColors (colorPalette) {
  const paletteRow = document.createElement('tr');
  
  for (let i = 0; i < colorPalette.length; i++) {
    const paletteElement = document.createElement('td');
    paletteElement.className = 'color';
    paletteElement.style.backgroundColor = colorPalette[i];
    paletteElement.addEventListener('click', handlePaletteClick);
    paletteElement.index = i;

    paletteRow.appendChild(paletteElement);
  }

  paletteContainer.appendChild(paletteRow);
  selectColor(0);
}

function handlePaletteClick(e) {
  console.log(e.target);
  selectColor(e.target.index);
}

function selectColor(index) {
  const paletteElements = paletteContainer.rows[0].children;

  if (selectedColor) {
    selectedColor.classList.remove('selected');
  }

  paletteElements[index].classList.add('selected');
  selectedColor = paletteElements[index];
}



createBoard(5, 5);
fillPaletteColors(['black', 'red', 'green', 'blue']);