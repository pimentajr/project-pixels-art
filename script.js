const sectionPixelBoard = document.getElementById('pixel-board');

function pixelBoard(linha, coluna) {
  for (let index = 0; index < linha; index += 1) {
    const sectionPixelBoardChild = document.createElement('section');
    sectionPixelBoard.appendChild(sectionPixelBoardChild);
    for (let indexJ = 0; indexJ < coluna; indexJ += 1) {
      const divPixelBoard = document.createElement('div');
      sectionPixelBoardChild.appendChild(divPixelBoard);
    }
  }
}

pixelBoard(5, 5);
