let pixelBoard = document.querySelector('.pixel-board');
let linesBoard = document.querySelectorAll('.tr');
let allPixels = document.querySelectorAll('.pixel');
let colorPalette = document.getElementById('color-palette');
let paletteItens = document.querySelectorAll('.color')

window.onload = function () {
  let blackColor = document.getElementById('color1');
  blackColor.classList.add('selected');
}

colorPalette.addEventListener('click', function(event) {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  for (let i = 0; i < paletteItens.length; i += 1) {
    event.target.classList.add('selected')
  }
});