function trocaCor(e) {
  let apontador = e.target;
  let corEscolhida = document.querySelector('.color.select').style.backgroundColor;
  if (apontador.style.backgroundColor !== corEscolhida) {
    apotador.style.backgroundColor = corEscolhida;
  } else {
    apontador.style.backgroundColor = 'white';
  }

  ultimaCorUsada = apontador.style.backgroundColor;
}

function altCor(e) {
  let corEscolhida = e.target;  
  corAtual = document.querySelector('.color.select');
  if (corEscolhida !== corAtual) {
    corEscolhida.classList.remove('selected');
    corAtual.classList.add('select');
  }
}

function inicio() {
  let corAtual = document.querySelector('.color.select');
  document.getElementsByClassName('color').addEventListener('click', altCor);
  document.getElementsByClassName('pixel').addEventListener('click', trocaCor);
}

window.onload = inicio;

