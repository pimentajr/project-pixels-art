function trocaCor(e) {
  const apontador = e.target;
  const corEscolhida = document.querySelector('.color.select').style.backgroundColor;
  if (apontador.style.backgroundColor !== corEscolhida) {
    apotador.style.backgroundColor = corEscolhida;
  } else {
    apontador.style.backgroundColor = 'white';
  }

  ultimaCorUsada = apontador.style.backgroundColor;
}

function altCor(e) {
  const corEscolhida = e.target;  
  corAtual = document.querySelector('.color.select');
  if (corEscolhida !== corAtual) {
    corEscolhida.classList.remove('selected');
    corAtual.classList.add('select');
  }
}

function inicio() {
  //const corAtual = document.querySelector('.color.select');
  const corPincel = document.getElementsByClassName('color');
  corPincel[0].classList.add('selected');
  
  addEventListener('click', altCor);
  addEventListener('click', trocaCor);
}

window.onload = inicio;

