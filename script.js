const black = document.getElementById('black');
const red = document.getElementById('cor2');
const blue = document.getElementById('cor3');
const green = document.getElementById('cor4');

// Cores randomicas 1 até 256
const random2 = Math.floor((Math.random() * 30)); // 2
const random3 = Math.ceil((Math.random() * 150)); // 3
const random4 = Math.floor((Math.random() * 300)); // 4
const randomString2 = random2.toString(); // 2
const randomString3 = random3.toString(); // 3
const randomString4 = random4.toString(); // 4

red.style.backgroundColor = `rgb(${randomString2},${randomString3},${randomString4})`; // 2
blue.style.backgroundColor = `rgb(${randomString3},${randomString2},${randomString4})`; // 3
green.style.backgroundColor = `rgb(${randomString4},${randomString3},${randomString2})`; // 4
let corSelecionada = 'black';
const classeColorSelected = 'color selected';

black.addEventListener('click', () => {
  black.className = classeColorSelected;
  red.className = 'color';
  blue.className = 'color';
  green.className = 'color';
  corSelecionada = 'black';
});

red.addEventListener('click', () => {
  red.className = classeColorSelected;
  black.className = 'color';
  blue.className = 'color';
  green.className = 'color';
  corSelecionada = `rgb(${randomString2},${randomString3},${randomString4})`;
});

blue.addEventListener('click', () => {
  red.className = 'color';
  black.className = 'color';
  blue.className = classeColorSelected;
  green.className = 'color';
  corSelecionada = `rgb(${randomString3},${randomString2},${randomString4})`;
});

green.addEventListener('click', () => {
  red.className = 'color';
  black.className = 'color';
  blue.className = 'color';
  green.className = classeColorSelected;
  corSelecionada = `rgb(${randomString4},${randomString3},${randomString2})`;
});

// const selectedColor = document.getElementsByClassName('color selected');
const changeColor = document.querySelector('#pixel-board');

changeColor.addEventListener('click', (e) => {
  e.target.style.backgroundColor = corSelecionada;
});

// Botão Limpar
const limparButton = document.getElementById('clear-board');
limparButton.addEventListener('click', () => {
  const capturarPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < capturarPixels.length; i += 1) {
    capturarPixels[i].style.backgroundColor = 'white';
  }
});

const numeroNovosPixels = document.getElementById('board-size');
const buttonNovosPixels = document.getElementById('generate-board');
const paizão = document.getElementById('pixel-board');
const remover1 = document.getElementById('linha1');
const remover2 = document.getElementById('linha2');
const remover3 = document.getElementById('linha3');
const remover4 = document.getElementById('linha4');
const remover5 = document.getElementById('linha5');

function createNewPixels(tamanho) {
  for (let i = 1; i <= tamanho; i += 1) {
    for (let j = 1; j <= tamanho; j += 1) {
      const novosPixels = document.createElement('div'); novosPixels.className = 'pixel';
      novosPixels.style.backgroundColor = 'white'; novosPixels.style.display = 'inline-block';
      novosPixels.style.height = '40px'; novosPixels.style.width = '40px';
      paizão.appendChild(novosPixels);
    }
    const mudarLinha = document.createElement('br'); paizão.appendChild(mudarLinha);
  }
}

buttonNovosPixels.addEventListener('click', () => {
  remover1.parentNode.removeChild(remover1); remover2.parentNode.removeChild(remover2);
  remover3.parentNode.removeChild(remover3); remover4.parentNode.removeChild(remover4);
  remover5.parentNode.removeChild(remover5); let tamanho = parseInt(numeroNovosPixels.value, 10);
  if (tamanho < 5) { tamanho = 5; }
  if (tamanho > 50) { tamanho = 50; }
  if (numeroNovosPixels.value === '') { alert('Board inválido!'); }
  createNewPixels(tamanho);
});
