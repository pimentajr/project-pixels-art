function trocaCor(e) {
  let apontador = e.target;
  let corEscolhida = document.querySelector('.color.selected').style.backgroundColor;
  if (apontador.style.backgroundColor !== corEscolhida) {
    apotador.style.backgroundColor = corEscolhida;
  } else {
    apontador.style.backgroundColor = 'white';
  }

  ultimaCorUsada = apontador.style.backgroundColor;
  e.target.releasePointerCapture(e.pointerId);
}

function altCor(e) {
  let corEscolhida = e.target;
  corAtual = document.querySelector('.color.selected');
  if (corEscolhida !== corAtual) {
    corEscolhida.classList.remove('selected');
    corAtual.classList.add('selected');
  }
}

function inicio() {
  let corAtual = document.querySelector(".select.color");
  
  addEventListener("click", altCor);
  addEventListener("click", trocaCor);
}

window.onload = inicio;

