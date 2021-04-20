let pixelBoard = document.getElementById('pixel-board');
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

pixelBoard.addEventListener('click', function(event) {
  let colorSelected = document.querySelector('.selected');
  for (let i = 0; i < allPixels.length; i += 1) {
    if (colorSelected === document.getElementById('color1')) {
    event.target.style.backgroundColor = 'black'
    }
    if (colorSelected === document.getElementById('color2')) {
      event.target.style.backgroundColor = 'red'
    }
    if (colorSelected === document.getElementById('color3')) {
      event.target.style.backgroundColor = 'green'
    }
    if (colorSelected === document.getElementById('color4')) {
      event.target.style.backgroundColor = 'blue'
    }   
  }
});
