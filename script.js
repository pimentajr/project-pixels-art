function pintando(event) {
  const currentColor = document.querySelector('.selected');
  console.log(currentColor.style.backgroundColor);
  event.target.style.backgroundColor = currentColor.style.backgroundColor;

  
  // if (apontador.style !== corEscolhida.style.backgroundColor) {
  //   apotador.style.backgroundColor = corEscolhida.style.backgroundColor;
  // } else {
  //   apontador.style.backgroundColor = 'white';
  // }

 // ultimaCorUsada = apontador.style.backgroundColor;
}

function palette(event) {
  const currentColor = document.querySelector('.selected');
  currentColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function inicio() {
  //const corAtual = document.querySelector('.color.select');
  
  const colorPalette = document.getElementById('color-palette');

  const pixelBoard = document.getElementById('pixel-board');

  colorPalette.addEventListener('click', palette);

  pixelBoard.addEventListener('click', pintando);

}

window.onload = inicio;

