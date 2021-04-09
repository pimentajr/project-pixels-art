const numberLines = 5;
const pixelBoard = document.getElementById("pixel-board");

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
    k = k + 1;
  }
}

const color = document.querySelectorAll('.color');

for (let i = 0; i < color.length; i += 1) { 
  color[i].addEventListener('click', function() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  color[i].classList.add('selected');
  });
  
const buttonClear = document.getElementById('botaoLimpar');

buttonClear.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});
