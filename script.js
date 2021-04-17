const colorPalette = document.querySelector('#color-palette');

const tamanhoPaleta = 5;

const pixelBoard = document.querySelector('#pixel-board');

const line = document.getElementById('pixel-board').children;

// código daqui pra baixo

const textBody = document.querySelector('body');

const storeButtom = document.createElement('section');
textBody.appendChild(storeButtom);

const button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
storeButtom.appendChild(button);

function CleanPaletas() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const clean = pixels[index];
    clean.style.backgroundColor = 'white';
  }
}

button.addEventListener('click', (event) => {
  CleanPaletas();
});

const itemPalette = document.querySelectorAll('.color');

function configurarCores() {
  document.querySelector('.black').style.backgroundColor = 'black';
  document.querySelector('.blue').style.backgroundColor = 'blue';
  document.querySelector('.red').style.backgroundColor = 'red';
  document.querySelector('.yellow').style.backgroundColor = 'yellow';
}

configurarCores();

function selecionarPaleta() {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const pixel = itemPalette[index];

    pixel.addEventListener('click', (events) => {
      const selecionarCor = document.querySelector('.selected');
      selecionarCor.classList.remove('selected');
      if (events.target.classList.contains('color')) {
        events.target.classList.add('selected');
      }
    });
  }
}
selecionarPaleta();

function criarAlinha() {
  for (let index = 0; index < tamanhoPaleta; index += 1) {
    const line = document.createElement('div');
    line.classList.add('linha');
    criarOPixel(line);
    pixelBoard.appendChild(line);
  }
}

function criarOPixel(linha) {
  for (let j = 0; j < tamanhoPaleta; j += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('click', (events) => {
      if (document.querySelector('.selected') !== null) {
        const color = document.querySelector('.selected').style.backgroundColor;
        events.target.style.backgroundColor = color;
      }
    });
    linha.appendChild(pixel);
  }
}
criarAlinha();

console.log(itemPalette);
function selecionarPreta() {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const color = itemPalette[index];
    if (color.classList.contains('black')) {
      color.classList.add('selected');
    }
  }
}
selecionarPreta();
