const startColor = document.getElementById('black');
startColor.classList.add('selected');

// identifica o click dentro da paleta de cores
let clickTest = document.getElementById('color-palette');
clickTest.addEventListener("click", selectColor);

function selectColor (event) {
  // atribuir a clase selected a cor que for clicada
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener("click", paintPixel);

function paintPixel (event) {
  let selectedColor = document.querySelector('.selected');
  let computedStyle = window.getComputedStyle(selectedColor);

  if (event.target.className === 'pixel') {
  event.target.style.backgroundColor = computedStyle.getPropertyValue('background-color')
  }
}
