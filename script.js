let tamanhoGrid = 5;
const cores = document.querySelectorAll('.color'); // atribui um array com as divs da paleta de cores
const pixels = document.getElementsByClassName('pixel'); 
const button = document.getElementById('clear-board'); 
const vqvBtt = document.getElementById('generate-board'); 
const divisaoTop = document.getElementById('pixel-board'); 
const inputUser = document.querySelector('#board-size');

//função selecionar cor
function selecColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1){
  cores [i].addEventListener('click', selecColor);
}
//função troca cor
const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    const newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixels[i].tsyle.backgroundColor = corNova;
  })
}
// limpa cor pixel
function clean() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}
//randomiza as cores dos pixels
document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
function corRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
for (let i = 1; i < cores.length; i += 1) {
  document.getElementsByClassName('color')[i].style.backgroundColor = corRandom();
}
//criando tables
function criarTable() {
  const tagTable = document.createElement('table'); // <table> <table/>
}