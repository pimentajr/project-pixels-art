window.onload = function carregar() {
  document.getElementById('black').classList.add('selected');
};

function selecionaClasse(event) {
  const atribuiClasse = document.querySelectorAll('.selected');
  for (let index = 0; index < atribuiClasse.length; index += 1) {
    atribuiClasse[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', selecionaClasse);

const tabela = document.querySelector('#pixel-board');
function pixel(event) {
  const actualColor = document.querySelector('.selected');
  const cor = getComputedStyle(actualColor).backgroundColor;
  const evento = event.target;
  evento.style.backgroundColor = cor;
}
tabela.addEventListener('click', pixel);

function tags(elemento) {
  return document.createElement(elemento);
}

const table = document.querySelector('.color-pixel');
const tbody = document.createElement('tbody');
table.appendChild(tbody);
let valor = document.getElementById('board-size').value;
function criaTabela(line) {
  for (let index = 0; index < line; index += 1) {
    const linha = tags('tr');
    tbody.appendChild(linha);
    for (let indexCelulas = 0; indexCelulas < line; indexCelulas += 1) {
      const celulas = linha.appendChild(tags('td'));
      celulas.className = 'pixel';
    }
  }
}
criaTabela(5);
const VQV = document.getElementById('generate-board');
VQV.addEventListener('click', () => {
  valor = document.getElementById('board-size').value;
  if (valor >= 5 && valor <= 50) {
    criaTabela();
    criaTabela(valor);
  } else if (valor <= 0) {
    criaTabela();
    alert('Board inválido!');
  }
});
criaTabela();
VQV.addEventListener('click', () => {
  if (valor < 5) {
    criaTabela();
    criaTabela(5);
  } else if (valor > 50) {
    criaTabela();
    criaTabela(50);
  }
});
criaTabela();
const botao = document.getElementById('clear-board');
function reset() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    while (pixels[index].style.backgroundColor !== 'white') {
      pixels[index].style.backgroundColor = 'white';
    }
  }
}
botao.addEventListener('click', reset);
