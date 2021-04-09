// inserindo as cores
function colorInsert() {
  const black = document.getElementById('black');
  const blue = document.getElementById('blue');
  const green = document.getElementById('green');
  const red = document.getElementById('red');
  black.style.backgroundColor = 'black';
  blue.style.backgroundColor = 'blue';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  black.classList.add('selected');
}

// cria uma linha de quadrados
function createLineSquares(lineLength) {
  const pixelBoard = document.getElementById('pixel-board');
  const squares = [];
  for (let lineIndex = 0; lineIndex < lineLength; lineIndex += 1) {
    const lines = [];
    lines[lineIndex] = document.createElement('div');
    lines[lineIndex].className = 'container';
    pixelBoard.appendChild(lines[lineIndex]);
    for (let index = 0; index < lineLength; index += 1) {
      squares[index] = document.createElement('div');
      squares[index].className = 'pixel';
      squares[index].style.backgroundColor = 'rgba(255, 255, 255)';
      lines[lineIndex].appendChild(squares[index]);
    }
  }
  return squares;
}

// Seleciona uma cor da minha paleta de cores
function selectColor() {
  const colorPaletteId = document.getElementById('color-palette');
  colorPaletteId.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    if (event.target.classList[0] === 'color') {
      selectedElement.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

// Pinta o quadrado selecionado
function paintPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    const color = selectedElement.style.backgroundColor;
    if (event.target.classList[0] === 'pixel') {
      event.target.style.backgroundColor = color;
    }
  });
}

// cria uma função que limpa as cores do board
function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

// Função para limpar todas as linhas
function clearLines() {
  const pixelP = document.getElementById('pixel-board');
  const childLength = pixelP.childElementCount;
  for (let index = 0; index < childLength; index += 1) {
    pixelP.removeChild(pixelP.childNodes[0]);
  }
}

// Função que define o tamanho do board
function lengthBoard() {
  const boardSize = document.getElementById('board-size');
  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', () => {
    clearLines();
    createLineSquares(boardSize.value);
  });
}

// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;
// Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);
// O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;
// O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;
// O botão deve conter o texto "VQV";
// O input deve estar posicionado entre a paleta de cores e o quadro de pixels;
// O botão deve estar posicionado ao lado do input;
// Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";
// O novo quadro deve ter todos os pixels preenchidos com a cor branca.

// eslint-disable-next-line func-names
window.onload = function () {
  colorInsert();
  createLineSquares(5);
  selectColor();
  paintPixel();
  lengthBoard();
  const clearPixelBoard = document.getElementById('clear-board');
  clearPixelBoard.addEventListener('click', clearBoard);
};



// O que será verificado:
// Verifica se existe um input com o id board-size
// Verifica se existe um botão com o id generate-board
// Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input
// Verifica se o botão contém o texto 'VQV'
// Verifica se o input está posicionado entre a paleta de cores e o quadro de pixels
// Verifica se o botão está posicionado ao lado do input
// Verifica se nenhum valor for colocado no input ao clicar no botão, um alert é exibido com o texto: 'Board inválido!'
// Verifica se ao clicar no botão com um valor preenchido, o tamanho do board muda.
// Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca

// 11 - Limite o tamanho mínimo e máximo do board.
// Caso o valor digitado no input board-sze fuja do intervalo de 5 a 50, faça:
// Valor menor que 5, considerar 5 como padrão;
// Valor maior que 50, considerar 50 como padrão.
// O que será verificado:
// Verifica se a altura máxima do board é 50
// Verifica se a altura do board é 5 quando um valor menor é colocado no input
// Verifica se a altura do board é 50 quando um valor maior é colocado no input

// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.
// O que será verificado:
// Verifica se as cores geradas na paleta são diferentes a cada carregamento da página
// Verifica se a cor preta ainda está presente e é a primeira na sua paleta de cores
