function ApplyColor() {
  const selectedColor = document.querySelector('.selected').id;
  this.id = selectedColor;
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].id = ('white');
  }
}

function createBoard(boardTable) {
  let row;
  let cell;
  for (let boardRow = 0; boardRow < 5; boardRow += 1) {
    row = document.createElement('tr');
    boardTable.appendChild(row);
    for (let boardColumn = 0; boardColumn < 5; boardColumn += 1) {
      cell = document.createElement('td');
      cell.className = ('pixel');
      cell.id = ('white');
      row.appendChild(cell);
      cell.addEventListener('click', ApplyColor);
    }
  }
}

function selectColor(newColor) {
  const previousColor = document.querySelector('.selected');
  previousColor.classList.remove('selected');
  console.log(newColor.type);
  this.classList.add('selected');
}

window.onload = function () {
  // Seleciona a cor preta como inicial:
  document.getElementById('black').classList.add('selected');
  // Chama a função que cria o quadro:
  createBoard(document.getElementById('pixel-board'));
  // Chamar evento de seleção de cor:
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', selectColor);
  }
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
};
