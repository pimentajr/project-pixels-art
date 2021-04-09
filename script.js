// Requisito 3 - Criação da cor de paleta preta na primeira posição
function addBlackColor() {
  const firstColor = document.getElementById('green');
  firstColor.style.backgroundColor = 'black';
}
addBlackColor();

// Requisito 4 - Criação do Pixel Board
// 5 linhas div com 5 divs dentro - inline
function createBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'boardline';
    pixelBoard.appendChild(lines);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixelItem = document.createElement('div');
      pixelItem.className = 'pixel';
      lines.appendChild(pixelItem);
    }
  }
}
createBoard();
