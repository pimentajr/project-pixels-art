function creatPallete() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'red', 'orange', 'yellow'];

  for (let index = 0; index < colors.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('color');
    createDiv.style.backgroundColor = colors[index];
    colorPalette.appendChild(createDiv);

    if (index === 0) {
      createDiv.classList.add('selected');
    }
  }
}
creatPallete();

function createPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  let size = document.querySelector('#board-size').value;

  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }

  if (size === '' || size <= 0) {
    window.alert('Board inválido!');
  }
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }

  for (let i = 0; i < size; i += 1) {
    const columns = document.createElement('div');
    pixelBoard.appendChild(columns);
    for (let j = 0; j < size; j += 1) {
      const lines = document.createElement('div');
      lines.classList.add('pixel');
      columns.appendChild(lines);
    }
  }
}

const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', function(event) {
  event.preventDefault();
  createPixelBoard();
});

createPixelBoard(5);

function addClassSelect() {
  const selectColor = document.querySelector('#color-palette');
  selectColor.addEventListener('click', (event) => {
    const select = document.querySelector('.selected');
    event.target.classList.add('selected');
    if (event.target.classList == 'color selected') {
      select.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
addClassSelect();

function addColorPixel() {
  const pixelSelect = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelSelect.length; i += 1) {
    pixelSelect[i].addEventListener('click', function () {
      pixelSelect[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}
addColorPixel();

function clearPixel() {
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((item) => {
      item.style.backgroundColor = 'white';
    });
  });
}
clearPixel();
