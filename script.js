function inputBoard() {
  const originInput = document.querySelector('#containerButton');
  const originTable = document.querySelector('#pixel-board');
  const input = document.createElement('input');
  const submit = document.createElement('button');
  input.type = 'number';
  input.id = 'board-size';
  input.min = '1';
  submit.id = 'generate-board';
  submit.innerText = 'VQV';
  originInput.appendChild(input);
  originInput.appendChild(submit);

  function defineBoard() {
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      let cont = input.value;
      if (cont > 50) {
        cont = 50;
      } else if (cont < 5) {
        cont = 5;
      }
      input.value = '';

      const newTable = document.querySelectorAll('.line');
      for (let index = 0; index < newTable.length; index += 1) {
        newTable[index].remove();
      }

      for (let line = 0; line < cont; line += 1) {
        const lineElement = document.createElement('tr');
        lineElement.className = 'line';
        originTable.appendChild(lineElement);
        for (let coluns = 0; coluns < cont; coluns += 1) {
          const originLine = document.getElementsByClassName('line');
          const colunsElement = document.createElement('td');
          colunsElement.className = 'pixel';
          originLine[line].appendChild(colunsElement);
        }
      }
    }
  }
  submit.addEventListener('click', defineBoard);
}

function selectColor() {
  const colorPalette = document.querySelector('#color-palette ul');
  function addSelected(event) {
    const colorSelected = event.target;
    for (let index = 0; index < colorPalette.children.length; index += 1) {
      colorPalette.children[index].classList.remove('selected');
    }
    colorSelected.classList.add('selected');
  }
  colorPalette.addEventListener('click', addSelected);
}

function applyColor() {
  const pixelBoard = document.querySelector('#pixel-board');
  function printBoard(event) {
    const colorPrint = document.querySelector('.selected');
    const boxSelected = event.target;
    const color = colorPrint.classList[1];
    if (boxSelected.classList.length >= 2) {
      boxSelected.className = 'pixel';
    }
    boxSelected.classList.add(color);
  }
  pixelBoard.addEventListener('click', printBoard);
}

function clearBoard() {
  const containerButton = document.querySelector('#containerButton');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  containerButton.appendChild(button);

  function clear() {
    const color = document.querySelectorAll('.pixel');
    for (let index = 0; index < color.length; index += 1) {
      color[index].className = 'pixel';
    }
  }
  button.addEventListener('click', clear);
}

inputBoard();
selectColor();
applyColor();
clearBoard();
