// Seleciona a cor preta como primária
const firstSelectedColor = document.getElementById('black-box');
firstSelectedColor.classList = ('color selected');

// Seleciona a cor mudando a classe da div clicada
function colorSelection() {
  const tableColor = document.querySelector('#color-palette');
  tableColor.addEventListener('click', (event) => {
    const actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    event.target.className = 'color selected';
  })
}
colorSelection();

// Pinta os pixels em branco com a cor selecionada
function printBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    const printBox = event.target;
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
    default:
    }
  });
}
printBoard();

// Cria o botão limpar e insere na div
function createButton () {
  const clearButton = document.createElement('input');
  clearButton.style.margin = '20px 120px' ;
  clearButton.id = 'clear-board';
  clearButton.value = 'Limpar';
  clearButton.innerHTML = 'Limpar';
  clearButton.type = 'button';
  const buttonDiv = document.getElementById('button');
  buttonDiv.appendChild(clearButton);
}
createButton();

// Ao clicar no botão, limpa a tela
function buttonAction() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function() {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  })
}
buttonAction();
