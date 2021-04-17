const colorPalette = document.querySelector('#color-palette');

const tamanhoPaleta = 5;

const pixelBoard = document.querySelector('#pixel-board');

const line = document.getElementById('pixel-board').children;


//código daqui pra baixo



function criarAlinha() {
  for (let index = 0; index < tamanhoPaleta; index += 1) {
    const line = document.createElement('div');
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

const itemPalette = document.querySelectorAll('.color');
// console.log(itemPalette);
function selecionarPreta() {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const color = itemPalette[index];
    if (color.style.backgroundColor === 'black') {
      color.className = 'selected';
    }
  }
}
selecionarPreta();

function selecionarPaleta() {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const pixel = itemPalette[index];

    pixel.addEventListener('click', (events) => {
      const selecionarCor = document.querySelector('.selected');
      if (pixel.className === 'color') {
        selecionarCor.classList.remove('selected');
        events.target.classList.add('selected');
      }
    });
  }
}
selecionarPaleta();

function colorirPixel() {
  
}
