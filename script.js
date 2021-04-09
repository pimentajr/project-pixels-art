const colorsNum = 4;
const gridX = 5;
const gridY = 5;

function colorGrid() {
  const gridOfColors = document.querySelector('#color-palette');
  for (let index = 0; index < colorsNum; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    gridOfColors.appendChild(color);
  }
}

colorGrid();

function giveColor() {
  const colorDivsArray = document.getElementsByClassName('color');
  colorDivsArray[0].style.backgroundColor = 'black';
  colorDivsArray[0].classList.add('selected');
  colorDivsArray[1].style.backgroundColor = 'maroon';
  colorDivsArray[2].style.backgroundColor = 'darkolivegreen';
  colorDivsArray[3].style.backgroundColor = 'darkcyan';
}

giveColor();

function createLines() {
  const gridOfPixels = document.querySelector('#pixel-board');
  for (let index = 0; index < gridY; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    gridOfPixels.appendChild(line);
  }
}

createLines();

function fillLines() {
  const linesArray = document.querySelectorAll('.line');
  for (let index = 0; index < linesArray.length; index += 1) {
    const line = linesArray[index];
    for (let index2 = 0; index2 < gridX; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

fillLines();

function selectColor() {
  const colorDivsArray = document.getElementsByClassName('color');
  for (let index = 0; index < colorDivsArray.length; index += 1) {
    const color = colorDivsArray[index];
    color.addEventListener('click', () => {
      const currentSelected = document.querySelector('.selected');
      currentSelected.classList.remove('selected');
      color.classList.add('selected');
    });
  }
}

selectColor();

function paintPixel() {
  const pixelDivsArray = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelDivsArray.length; index += 1) {
    const pixel = pixelDivsArray[index];
    pixel.addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      pixel.style.backgroundColor = selectedColor;
    });
  }
}

paintPixel();

function buttonClear() {
  const container = document.querySelector('#button-container');
  const btnClear = document.createElement('button');
  btnClear.id = 'clear-board';
  btnClear.innerText = 'Limpar';
  container.appendChild(btnClear);
  btnClear.addEventListener('click', () => {
    const pixelDivsArray = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelDivsArray.length; index += 1) {
      const pixel = pixelDivsArray[index];
      pixel.style.backgroundColor = 'white';
    }
  });
}

buttonClear();
