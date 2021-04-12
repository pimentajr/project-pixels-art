const paletteBoard = document.getElementById('color-palette');

const colorsPalette = (paletteBoard.rows[0].children);

for (let i = 0; i < colorsPalette.length; i += 1) {
  colorsPalette[i].addEventListener('click', () => {
    const nowSelected = document.querySelector('.selected');
    nowSelected.classList.remove('selected');
    colorsPalette[i].classList.add('selected');
  });
}

const pixelTable = document.getElementById('pixel-board');

function paintTable() {
  for (let i = 0; i < pixelTable.children[0].children.length; i += 1) {
    const tableLine = pixelTable.children[0].children;
    const tableElements = tableLine[i].children;

    for (let j = 0; j < tableElements.length; j += 1) {
      tableElements[j].addEventListener('click', () => {
        const selectedColor = document.querySelector('.selected').style.backgroundColor;
        tableElements[j].style.backgroundColor = selectedColor;
      });
    }
  }
}

paintTable();

function clearMyTable() {
  const myButton = document.getElementById('clear-board');
  const tableLineClear = document.querySelectorAll('.pixel');

  myButton.addEventListener('click', () => {
    for (let i = 0; i < tableLineClear.length; i += 1) {
      tableLineClear[i].style.backgroundColor = 'white';
    }
  });
}

clearMyTable();

const vqvButton = document.getElementById('generate-board');
const numberInput = document.getElementById('board-size');

function newTable(number) {
  const numberValue = number;
  pixelTable.removeChild(pixelTable.children[0]);
  const newTBody = document.createElement('tbody');
  pixelTable.appendChild(newTBody);

  for (let i = 0; i < numberValue; i += 1) {
    const newTr = document.createElement('tr');
    newTBody.appendChild(newTr);
    for (let j = 0; j < numberValue; j += 1) {
      const newTd = document.createElement('td');
      newTr.appendChild(newTd);
      newTd.classList = 'pixel';
    }
  }
  paintTable();
  clearMyTable();
}

function newNumberInput(number) {
  let newNumber;
  if (number < 5) {
    newNumber = 5;
  } if (number > 50) {
    newNumber = 50;
  }
  return newNumber;
}

vqvButton.addEventListener('click', () => {
  const numberValue = numberInput.value;
  if (numberValue >= 5 && numberValue <= 50) {
    newTable(numberValue);
  } else {
    const newNumber = newNumberInput(numberValue);
    newTable(newNumber);
    alert('Board inválido!');
  }
});

function generateRandomColor() {
  const randomColorRgbValues = `rgb(
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)})`;
  return randomColorRgbValues;
}

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');

color1.style.backgroundColor = generateRandomColor();
color2.style.backgroundColor = generateRandomColor();
color3.style.backgroundColor = generateRandomColor();

/* A função generateRandomColor foi retirada de: https://codepen.io/YuvarajTana/pen/RNZjjr */
