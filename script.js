function randomColors() {
  const blackBox = document.createElement('div');
  blackBox.style.backgroundColor = 'black';
  blackBox.classList.add('color', 'selected');
  const colorSection = document.getElementById('color-palette');
  colorSection.appendChild(blackBox);
  for (let index = 0; index < 3; index += 1) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color';
    const randColor = `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;
    colorBox.style.backgroundColor = randColor;
    colorSection.appendChild(colorBox);
  }
}
randomColors();

const containerTable = document.getElementById('pixel-board');
const button = document.getElementById('generate-board');

function initTable() {
  const newTable = document.createElement('div');
  newTable.id = 'new-table';
  containerTable.appendChild(newTable);
  const n = 5;
  for (let rows = 0; rows < n; rows += 1) {
    const tr = document.createElement('div');
    tr.classList.add('tr');
    newTable.appendChild(tr);
    for (let columns = 0; columns < n; columns += 1) {
      const td = document.createElement('div');
      td.classList.add('pixel');
      tr.appendChild(td);
    }
  }
}
initTable();

function inputCondition() {
  let valor = document.getElementById('board-size').value;
  if (valor === '') {
    valor = 5;
    alert('Board inválido!');
  }
  if (valor < 5) {
    valor = 5;
  }
  if (valor > 50) {
    valor = 50;
  }
  return parseInt(valor, 10);
}

function updateTable() {
  let defaultTable = document.getElementById('new-table');
  button.addEventListener('click', () => {
    const newerTable = document.createElement('div');
    containerTable.replaceChild(newerTable, defaultTable);
    const tableSize = inputCondition();
    for (let rows = 0; rows < tableSize; rows += 1) {
      const tr = document.createElement('div');
      tr.classList.add('tr');
      newerTable.appendChild(tr);
      for (let columns = 0; columns < tableSize; columns += 1) {
        const td = document.createElement('div');
        td.classList.add('pixel');
        tr.appendChild(td);
      }
    }
    newerTable.id = 'new-table';
    defaultTable = newerTable;
  });
}
updateTable();

function newColorSelector() {
  const paleta = document.getElementById('color-palette');
  const opcao = document.getElementsByClassName('color');
  paleta.addEventListener('click', (event) => {
    for (let index = 0; index < opcao.length; index += 1) {
      if (opcao[index].classList.contains('selected')) {
        opcao[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
newColorSelector();

function fillPixels() {
  containerTable.addEventListener('click', (event) => {
    const selectedPixel = event.target;
    selectedPixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
}
fillPixels();

function clearBoard() {
  const clearButton = document.querySelector('#clear-board');
  const pixels = document.getElementsByClassName('pixel');
  clearButton.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
