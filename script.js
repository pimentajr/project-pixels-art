let tamanhoGrid = 5;
const cores = document.querySelectorAll('.color'); 
const pixels = document.getElementsByClassName('pixel'); 
const button = document.getElementById('clear-board'); 
const criarBtt = document.getElementById('generate-board'); 
const divTop = document.getElementById('pixel-board'); 
const inputUser = document.querySelector('#board-size');

// randomiza cores a ser selecionada
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
// cria a grid de pixel
function criarGrid() {
  const tagTable = document.createElement('table'); // <table> <table/>
  // declara a div que vamos usar
  divTop.appendChild(tagTable);
  for (let n = 1; n <= tamanhoGrid; n += 1) {
    const tagTR = document.createElement('tr');
  for (let i = 0; i < cores.length; i += 1) {
      cores[i].addEventListener('click', selecionaCor);
    }
  }
}
// print a grade
function printPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
      pixels[i].style.backgroundColor = corNova;
    });
  }
}
printPixels();

// muda a grade de acordo com o input
function criarGridValue() {
  tamanhoGrid = inputUser.value;
  criarGrid();
}

// limpar grid da grid
function limpaGrid() {
  divTop.innerHTML = '';

}
// limpa cor grid
function clearBtt() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}

button.addEventListener('click', clearBtt);
criarBtt.addEventListener('click', limpaGrid);
criarBtt.addEventListener('click', verificaInput);
criarBtt.addEventListener('click', verificaGridValeu);
criarBtt.addEventListener('click', criarGridValue);