function paletaDeCores(classes) {
  const cores = document.createElement('li');
  cores.className = classes;
  return cores;
}
const colorPalette = document.querySelector('#color-palette');
colorPalette.appendChild(paletaDeCores('color preto'));
colorPalette.appendChild(paletaDeCores('color coral'));
colorPalette.appendChild(paletaDeCores('color violeta'));
colorPalette.appendChild(paletaDeCores('color aqua'));

const pixelBoard = document.querySelector('#pixel-board');
for (let index = 0; index < 5; index += 1) {
  const linha = document.createElement('tr');
  linha.className = 'pixel';
  pixelBoard.appendChild(linha);
  for (let felipex = 0; felipex < 5; felipex += 1) {
    const coluna = document.createElement('td');
    coluna.className = 'pixel';
    pixelBoard.appendChild(coluna);
  }
}
