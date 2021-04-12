function createColorPalette() {
  const colors = ['red', 'yellow', 'blue'];
  const color = document.querySelectorAll('.color');
  color[0].style.backgroundColor = 'black';
  color[0].classList.add('selected');
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = colors[index - 1];
  }
}

function colorsPixel(event) {
  const selecionedColor = document.querySelector('.selected').style.backgroundColor;
  const selecionedColorEvent = event.target;
  selecionedColorEvent.style.backgroundColor = selecionedColor;
}

function colorChange() {
  const squareList = document.querySelectorAll('.pixel');
  for (let index = 0; index < squareList.length; index += 1) {
    squareList[index].addEventListener('click', colorsPixel);
  }
}

function deleteTable() {
  const table = document.querySelector('#pixel-board');
  document.body.removeChild(table);
}

function reinsertTable(size) {
  deleteTable();
  const newPixelTable = document.createElement('div');
  newPixelTable.id = 'pixel-board';
  document.body.appendChild(newPixelTable);
  for (let index = 0; index < size; index += 1) {
    const newPixels = document.createElement('div');
    newPixels.classList.add('pixels');
    newPixelTable.appendChild(newPixels);
    for (let counter = 0; counter < size; counter += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newPixels.appendChild(newPixel);
    }
  }
  colorChange();
}

function selectColorInPalette(event) {
  const selected = document.querySelector('.selected');
  const eventSelectColor = event;
  selected.classList.remove('selected');
  eventSelectColor.target.classList.add('selected');
}

function changeTheColor() {
  const colorsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].addEventListener('click', selectColorInPalette);
  }
}

function removeColorFromTable() {
  const pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

function colorRemovalEvent() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', removeColorFromTable);
}

function checkSize() {
    const input = document.getElementById('board-size');
    if (input.value.length === 0) {
      alert('Board inválido!');
      return;
    }
    let size = parseInt(input.value, 10);
    if (size <= 5) {
      size = 5;
    } else if (size >= 50) {
      size = 50;
    }
    reinsertTable(size);
  }
  function eventResize() {
    const button = document.getElementById('generate-board');
    button.addEventListener('click', checkSize);
  }

function generateScaledTable() {
  
}

window.onload = function reloadBrowser() {
  createColorPalette();
  reinsertTable(5);
  changeTheColor();
  colorRemovalEvent();
  eventResize();
};
