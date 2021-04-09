const paletteContainer = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

let selectedColor;

function clearBoard() {
  const { rows } = board;

  for (let i = 0; i < rows.length; i += 1) {
    const columns = rows[i].children;

    for (let j = 0; j < columns.length; j += 1) {
      columns[j].style.backgroundColor = 'white';
    }
  }
}

function paintPixel(e) {
  e.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function createBoard(rows, columns) {
  for (let i = 0; i < rows; i += 1) {
    const row = document.createElement('tr');

    for (let j = 0; j < columns; j += 1) {
      const cell = document.createElement('td');
      cell.classList.add('pixel');
      cell.addEventListener('click', paintPixel);

      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

function selectColor(index) {
  const paletteElements = paletteContainer.rows[0].children;

  if (selectedColor) {
    selectedColor.classList.remove('selected');
  }

  paletteElements[index].classList.add('selected');
  selectedColor = paletteElements[index];
}

function handlePaletteClick(e) {
  console.log(e.target);
  selectColor(e.target.index);
}

function createPalette(colorPalette) {
  const paletteRow = document.createElement('tr');

  for (let i = 0; i < colorPalette.length; i += 1) {
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

function getRandomColor() {
  let color = '#';

  for (let i = 0; i < 3; i += 1) {
    const randomSingleHue = Math.round(Math.random() * 255);

    let hexPart = randomSingleHue.toString(16);
    hexPart = hexPart.padStart(2, '0');

    color += hexPart;
  }
  return color;
}

function getRandomPalette() {
  const palette = [];

  palette.push('black');

  for (let i = 0; i < 3; i += 1) {
    palette.push(getRandomColor());
  }

  return palette;
}

function hasDuplicate(array) {
  return new Set(array).size !== array.length;
}

function hasWhite(palette) {
  for (let i = 0; i < palette.length; i += 1) {
    if (palette[i] === '#000000') {
      return true;
    }
  }

  return false;
}

function getSpecificPalette() {
  let palette;
  let hasWhiteColor = true;
  let hasDuplicateColor = true;

  while (hasWhiteColor || hasDuplicateColor) {
    palette = getRandomPalette();
    hasWhiteColor = hasWhite(palette);
    hasDuplicateColor = hasDuplicate(palette);
  }

  return palette;
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

const sizeInput = document.getElementById('board-size');
const resizeButton = document.getElementById('generate-board');

resizeButton.addEventListener('click', () => {
  let size = sizeInput.value;

  if (!size) {
    return alert('Board inválido!');
  }

  size = parseInt(size, 10);

  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }

  deleteBoard();
  createBoard(size, size);

  sizeInput.value = '';
});

createBoard(5, 5);
createPalette(getSpecificPalette());
