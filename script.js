// Seleciona a cor preta como primária e também cria um tabuleiro padrão
window.onload = function() {
  const firstSelectedColor = document.getElementById('black-box');
  firstSelectedColor.classList = ('color selected');
  boardMaker(5);
};

// Seleciona a cor mudando a classe da div clicada
function colorSelection() {
  const tableColor = document.querySelector('#color-palette');
  tableColor.addEventListener('click', (event) => {
    const actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    event.target.classList = 'color selected';
  });
}
colorSelection();

// Pinta a box selecionada com a cor correta
function printBox(printBox) {
  switch (document.querySelector('.selected').id) {
  case 'black-box':
    printBox.style.backgroundColor = 'black';
    break;
  case 'red-box':
    printBox.style.backgroundColor = 'red';
    break;
  case 'green-box':
    printBox.style.backgroundColor = 'green';
    break;
  case 'yellow-box':
    printBox.style.backgroundColor = 'yellow';
    break;
  default:
  }
}
selectPixel();

// Seleciona o pixel clicando nele, e se for um píxel e não a seção, chama o evento
function selectPixel() {
  document.getElementById('pixel-board').addEventListener('click', (event) => {
    const boxTarget = event.target;
    if (boxTarget.id !== 'pixel-board') {
      printBox(boxTarget);
    }
  });
}


// Cria o botão limpar e insere na div
function createButton() {
  const clearButton = document.createElement('input');
  clearButton.style.margin = '20px 10px';
  clearButton.id = 'clear-board';
  clearButton.value = 'Limpar';
  clearButton.innerHTML = 'Limpar';
  clearButton.type = 'button';
  const buttonDiv = document.getElementById('buttons');
  buttonDiv.appendChild(clearButton);
}
createButton();

// Ao clicar no botão, limpa a tela
function buttonAction() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
buttonAction();

// Cria um botão e um campo de input
function buttonResize() {
  const boardSize = document.createElement('input');
  boardSize.id = 'board-size';
  boardSize.type = 'number';
  boardSize.placeholder = 'Tabuleiro de quantos pixels?';
  document.getElementById('buttons').appendChild(boardSize);
  const generateBoard = document.createElement('input');
  generateBoard.id = 'generate-board';
  generateBoard.type = 'button';
  generateBoard.value = 'VQV';
  generateBoard.innerHTML = 'VQV';
  document.getElementById('buttons').appendChild(generateBoard);
}
buttonResize();

// Reseta o tabuleiro
function boardRemove() {
  const oldBoard = document.querySelector('#pixel-board');
  oldBoard.innerHTML = '';
}

// Cria os elementos do quadro de acordo com o número de pixels
function boardMaker(pixels) {
  boardRemove();
  const pixelXY = pixels;
  const pixelBoard = document.getElementById('pixel-board');
  const numberOfPixels = pixelXY * pixelXY;
  for (let index = 1; index <= numberOfPixels; index += 1) {
    const pixelElement = document.createElement('div');
    pixelBoard.appendChild(pixelElement).className = 'pixel';
    if (index % pixelXY === 0) {
      const breakLine = document.createElement('br');
      pixelBoard.appendChild(breakLine);
    }
  }
}

// Cria um quadro utilizando o tamanho inserido no input
function BoardSize() {
  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', () => {
    const boardSize = document.getElementById('board-size').value;
    boardMaker(boardSize);
  });
}
BoardSize();
