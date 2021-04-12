function createBoard(boardTable) {
  // let board;
  let row;
  let cell;
  for (let boardRow = 0; boardRow < 5; boardRow += 1) {
    row = document.createElement('tr');
    boardTable.appendChild(row);
    for (let boardColumn = 0; boardColumn < 5; boardColumn += 1) {
      cell = document.createElement('td');
      // content = document.createTextNode('');
      cell.className = ('pixel');
      row.appendChild(cell);
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
};
