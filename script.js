function fillPixelFromPointerDown(e) {
  const clickedPixel = e.target;
  const selectedColor = document.querySelector('.color.selected').style.backgroundColor;
  if (clickedPixel.style.backgroundColor !== selectedColor) {
    clickedPixel.style.backgroundColor = selectedColor;
  } else {
    clickedPixel.style.backgroundColor = 'white';
  }

  lastClickedPixelColor = clickedPixel.style.backgroundColor;
  e.target.releasePointerCapture(e.pointerId);
}

function altCor(e) {
  const corEscolhida = e.target;
  const corAtual = document.querySelector('.color.selected');
  if (corEscolhida !== corAtual) {
    corEscolhida.classList.remove('selected');
    corEscolhida.classList.add('selected');
  }
}

function inicio() {
  const inicialBlack = document.querySelector('.color .selected');
  addEventListener("click", altCor);
  
}

window.onload = inicio;

