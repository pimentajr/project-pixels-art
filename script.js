const paletteContainer = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

let selectedColor;

function clearBoard () {
  for (let row of board.rows) {
    for (let cell of row.children) {
      cell.style.backgroundColor = 'white';
    }
  }
}

function createBoard (rows, columns) {
  for (let i = 0; i < rows; i += 1) {
    let row = document.createElement('tr');
    
    for (let j = 0; j < columns; j += 1) {
      let cell = document.createElement('td');
      cell.classList.add('pixel');
      cell.addEventListener('click', paintPixel);

      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

function createPalette (colorPalette) {
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

function deleteBoard() {
  console.log(board.lastChild);
  while (board.lastElementChild) {
    board.removeChild(board.lastElementChild);
  }
}

function handlePaletteClick(e) {
  console.log(e.target);
  selectColor(e.target.index);
}

function paintPixel(e) {
  e.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function selectColor(index) {
  const paletteElements = paletteContainer.rows[0].children;

  if (selectedColor) {
    selectedColor.classList.remove('selected');
  }

  paletteElements[index].classList.add('selected');
  selectedColor = paletteElements[index];
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

const sizeInput = document.getElementById('board-size');
const resizeButton = document.getElementById('generate-board');

resizeButton.addEventListener('click', function() {
  const size = sizeInput.value;

  if (!size) {
    return alert('Board inválido!');
  }

  deleteBoard();
  createBoard(size, size);

  sizeInput.value = '';
});

createBoard(5, 5);
createPalette(['black', 'red', 'green', 'blue']);