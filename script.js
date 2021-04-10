// Cria e colore a paleta
function createColor(boxColor) {
  const palette = document.querySelector('#color-palette');
  const box = document.createElement('div');
  box.style.backgroundColor = boxColor;
  box.className = ('color');
  if (boxColor === 'black') box.classList.add('selected');
  palette.appendChild(box);
}
createColor('black');
createColor('red');
createColor('blue');
createColor('yellow');

// Preenche uma grid
function populateGrid(size) {
  const pixelBox = document.querySelector('#pixel-board');
  for (let index = 0; index < size; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBox.appendChild(pixelColumn);
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
  const eventPalette = document.querySelector('#color-palette');
  eventPalette.addEventListener('click', (selectedColor) => {
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
  const eventGrid = document.querySelector('#pixel-board');
  eventGrid.addEventListener('click', (paintPixel) => {
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
  const container = document.querySelector('#pixel-board');
  const btnClear = document.createElement('button');
  btnClear.id = 'clearBtn';
  btnClear.innerText = 'Limpar';
  container.appendChild(btnClear);
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

/*
Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

O que será verificado:

    Verifica se o botão tem o id denominado clear-board

    Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

    Verifica se o texto do botão é 'Limpar'

    Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco
*/
