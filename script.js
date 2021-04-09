/**
 * Cria um elemento div e atribui a ele a classe 'pixel'.
 */
function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}
/**
 * Cria quadro de pixels com 'num' linhas e 'num' colunas.
 */
function createPixelBoard(num) {
  const board = document.getElementById('pixel-board');
  for (let row = 0; row <= num; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    for (let column = 0; column <= num; column += 1) {
      pixelRow.appendChild(createPixel());
    }
    board.appendChild(pixelRow);
  }
}
createPixelBoard(5); // inicia o quadro com num=5.
