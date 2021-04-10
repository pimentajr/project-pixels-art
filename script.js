const colorsNum = 4;
let gridX = 5;
let gridY = 5;

function colorGrid() {
  const gridOfColors = document.querySelector('#color-palette');
  for (let index = 0; index < colorsNum; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    gridOfColors.appendChild(color);
  }
}

colorGrid();

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let randomColor = '#';
  for (let index = 0; index < 6; index += 1) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  if (randomColor === '#ffffff' || randomColor === '#000000') {
    randomColor = generateRandomColor();
  }
  return randomColor;
}

function giveColor() {
  const colorDivsArray = document.getElementsByClassName('color');
  colorDivsArray[0].style.backgroundColor = 'black';
  colorDivsArray[0].classList.add('selected');
  colorDivsArray[1].style.backgroundColor = generateRandomColor();
  colorDivsArray[2].style.backgroundColor = generateRandomColor();
  colorDivsArray[3].style.backgroundColor = generateRandomColor();
}

giveColor();

function createLines() {
  const gridOfPixels = document.querySelector('#pixel-board');
  gridOfPixels.innerHTML = '';
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

function changeGridSizeComplemnt(inputSize) {
  let newValue = inputSize.value;
  if (newValue !== '' && newValue !== null) {
    if (newValue < 5) {
      newValue = 5;
    } else if (newValue > 50) {
      newValue = 50;
    }
    gridX = newValue;
    gridY = newValue;
    createLines();
    fillLines();
    paintPixel();
    return '';
  }
  alert('Board inválido!');
}

function changeGridSize() {
  const container = document.querySelector('#control-panel');
  const inputSize = document.createElement('input');
  inputSize.id = 'board-size';
  inputSize.type = 'number';
  inputSize.min = '1';
  const btnResize = document.createElement('button');
  btnResize.id = 'generate-board';
  btnResize.innerText = 'VQV';
  container.appendChild(inputSize);
  container.appendChild(btnResize);
  btnResize.addEventListener('click', () => {
    inputSize.value = changeGridSizeComplemnt(inputSize);
  });
}

changeGridSize();

function buttonClear() {
  const container = document.querySelector('#control-panel');
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
