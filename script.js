const colorPallet = document.querySelector('#color-palette');

function createColor(array) {
  for (let i = 0; i < array.length; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = array[i];
    colorPallet.appendChild(color);
  }
}
createColor(['black', 'red', 'blue', 'green']);

function createBoard(n) {
  const board = document.querySelector('#pixel-board');

  for (let row = 0; row < n; row += 1) {
    const rowLine = document.createElement('div');
    rowLine.className = 'rowline';
    for (let column = 0; column < n; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      rowLine.appendChild(pixel);
    }
    board.appendChild(rowLine);
  }
}
createBoard(5);

function blackSelected() {
  const black = document.querySelector('.color');
  if (black.style.backgroundColor === 'black') {
    black.classList.add('selected');
  }
}
blackSelected();

function colorSelect() {
  const colorSelection = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelection.length; i += 1) {
    colorSelection[i].addEventListener('click', () => {
      for (let j = 0; j < colorSelection.length; j += 1) {
        colorSelection[j].classList.remove('selected');
      }
      colorSelection[i].classList.add('selected');
    });
  }
}
colorSelect();

function palletSelectColor() {
  const selectedPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < selectedPixel.length; i += 1) {
    selectedPixel[i].addEventListener('click', (event) => {
      const selectColor = document.querySelector('.selected');
      const selectedColor = selectColor.style.backgroundColor;
      const element = event.target;
      element.style.backgroundColor = selectedColor;
    });
  }
}
palletSelectColor();

function createReset() {
  const pixel = document.querySelectorAll('.pixel');
  const btnReset = document.querySelector('#clear-board');
  btnReset.addEventListener('click', () => {
    for (let cell = 0; cell < pixel.length; cell += 1) {
      if (pixel[cell].style.backgroundColor !== 'white') {
        pixel[cell].style.backgroundColor = 'white';
      }
    }
  });
}
createReset();

/* 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;
Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);
Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";
O novo quadro deve ter todos os pixels preenchidos com a cor branca. */

function setBoard() {
  const inputBox = document.querySelector('#board-size');
  const btnVqv = document.querySelector('#generate-board');
  const pxBoard = document.querySelector('#pixel-board');
  btnVqv.addEventListener('click', () => {
    if (inputBox.value < 1) {
      alert('Board inválido!');
    } else {
      pxBoard.innerHTML = '';
      createBoard(inputBox.value);
    }
  });
}
setBoard();
