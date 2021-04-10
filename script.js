const numberLines = 5;
const pixelBoard = document.getElementById('pixel-board');

const pixel = [];
const linha = [];

let k = 0;
for (let i = 0; i < numberLines; i += 1) {
  linha[i] = document.createElement('div');
  linha[i].className = 'linha';
  pixelBoard.appendChild(linha[i]);

  for (let j = 0; j < numberLines; j += 1) {
    pixel[k] = document.createElement('div');
    pixel[k].className = 'pixel';
    linha[i].appendChild(pixel[k]);
    k += 1;
  }
}

const color = document.querySelectorAll('.color');

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    color[i].classList.add('selected');
  });
}

pixelBoard.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
});

const clear = document.querySelector('#botaoLimpar');
clear.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
