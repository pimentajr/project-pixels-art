
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
let corSelecionada = '';
let selectPalette = document.querySelector('#color-palette');
function selectColor() {
  selectPalette.addEventListener('click', function (e) {
    const selectedColor = document.querySelector('.selected');
    if (e.target.classList !== 'selected') {
      selectedColor.classList.remove('selected');
      e.target.classList.add('selected');

    }
  })
}
selectColor()

function paintPixel() {
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function (e) {
    const colorSelected = document.querySelector('.selected');
    if (e.target.className === 'pixel') {
      const color = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
      const clickedPixel = e.target;
      clickedPixel.style.backgroundColor = color;
    }
  })
}
paintPixel()
