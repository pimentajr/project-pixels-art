const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');

// Cria e colore a paleta
function createColor(boxColor) {
  const box = document.createElement('div');
  box.style.backgroundColor = boxColor;
  box.className = ('color');
  if (boxColor === 'black') box.classList.add('selected');
  colorPalette.appendChild(box);
}
createColor('black');
createColor('red');
createColor('blue');
createColor('yellow');

// Preenche uma grid
function populateGrid(size) {
  for (let index = 0; index < size; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBoard.appendChild(pixelColumn);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelLine = document.createElement('div');
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}
populateGrid(5);

// Muda a classe selected
function clickPalette() {
  colorPalette.addEventListener('click', (selectedColor) => {
    const eventTarget = selectedColor.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
}
clickPalette();

// Colore o pixel
function colorGrid() {
  pixelBoard.addEventListener('click', (paintPixel) => {
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    const eventTarget = paintPixel.target;
    if (eventTarget.className === 'pixel') {
      eventTarget.style.backgroundColor = colorSelected;
    }
  });
}
colorGrid();

// Limpa o grid
function addBtn() {
  const btnClear = document.createElement('button');
  btnClear.id = 'clearBtn';
  btnClear.innerText = 'Limpar';
  pixelBoard.appendChild(btnClear);
}

function clearGrid() {
  const eventBtn = document.querySelector('#clearBtn');
  eventBtn.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
addBtn();
clearGrid();
