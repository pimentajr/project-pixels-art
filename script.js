// Pegar todas as cores da paleta:

const colorPalette = document.querySelector('#color-palette');
const itemPalette = document.querySelector('.color');
const pixelBoard = document.querySelector('#pixel-board');
const tamanhoPaleta = 5;
const line = document.getElementById('pixel-board').children;

//código daqui pra baixo

function criarAlinha() {
  for (let index = 0; index < tamanhoPaleta; index += 1) {
    let line = document.createElement('div');
    line.classList.add('linha');
    pixelBoard.appendChild(line);
  }
}
criarAlinha();

function criarOPixel() {
  for (let i = 0; i < line.length; i += 1) {
    for (let j = 0; j < tamanhoPaleta; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line[i].appendChild(pixel);
    }
  }
}
criarOPixel();
console.log(line);


