function trocaCor(e) {
  const apontador = e.target;
  const corEscolhida = document.querySelector('.color.selected').style.backgroundColor;
  if (apontador.style.backgroundColor !== corEscolhida) {
    apotador.style.backgroundColor = corEscolhida;
  } else {
    apontador.style.backgroundColor = 'white';
  }

  ultimaCorUsada = apontador.style.backgroundColor;
  e.target.releasePointerCapture(e.pointerId);
}

function altCor(e) {
  const corEscolhida = e.target;
  const corAtual = document.querySelector('.color.selected');
  if (corEscolhida !== corAtual) {
    corEscolhida.classList.remove('selected');
    corAtual.classList.add('selected');
  }
}

function inicio() {
  const corAtual = document.selected.querySelector(".color");
  
  addEventListener("click", altCor);
  addEventListener("click", trocaCor);
}

window.onload = inicio;

