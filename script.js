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
function criaTabela(line) {
  for (let index = 0; index < line; index += 1) {
    const linha = tags('tr');
    tbody.appendChild(linha);
    for (let indexCelulas = 0; indexCelulas < line; indexCelulas += 1) {
      const celulas = linha.appendChild(tags('td'));
      celulas.className = 'pixel';
    }
  }
  if (line < 5) {
    criaTabela(5);
  } else if (line > 50) {
    criaTabela(50);
  }
}

criaTabela(5);
const botaoVQV = document.getElementById('generate-board');
botaoVQV.addEventListener('click', criaTabela);

const botao = document.getElementById('clear-board');
const quadrados = document.querySelectorAll('.pixel');
const backgroundColor = 'white';
function reset() {
  for (let index = 0; index < quadrados.length; index += 1) {
    while (quadrados[index].style.backgroundColor !== backgroundColor) {
      quadrados[index].style.backgroundColor = backgroundColor;
    }
  }
}
botao.addEventListener('click', reset);
