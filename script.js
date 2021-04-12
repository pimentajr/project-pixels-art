
function criadorDePixels() {
  let quadro = document.getElementById('pixel-board');
  for (let coluna = 0; coluna < 5; coluna += 1) {
    const createDadPixel = document.createElement('div');
    quadro.appendChild(createDadPixel);
    for (let linha = 0; linha < 5; linha += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      createDadPixel.appendChild(createPixel);
    }
  }
}
criadorDePixels()

let selectPalette = document.querySelector('#color-palette');

function selectColor() {
  const selectedColor = document.querySelector('.selected');
  selectPalette.addEventListener('click', function(e) {
  if (e.target.id !== 'color-palette') {
    selectedColor.classList.remove('selected');
    e.target.classList.add('selected');
  }
})
}

selectColor()

