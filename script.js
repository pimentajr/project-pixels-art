let pixelBoards = document.getElementById('pixel-board');
let btn = document.getElementById('clear-board');
let title = document.querySelector('#title');

function makeTitle () {
title.innerHTML = 'Paleta de Cores';
}
makeTitle();

// https://www.w3schools.com/howto/howto_js_active_element.asp
let colorPalette = document.querySelectorAll('#color-palette>button');
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].className = 'color';
  colorPalette[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('selected');
    current[0].className = current[0].className.replace('selected', '');
    this.className = 'selected color';
  });
}


function makeDivs () {
for (let i = 1; i <= 25; i += 1) {
  let pixelDiv = document.createElement('div');
  pixelDiv.className = 'pixel';
  pixelBoards.appendChild(pixelDiv);
}
}
makeDivs();

function colorPixel (event) {
  selects = document.querySelector('.selected');
  let pixeLol = event.target;
  let selectedColor = window.getComputedStyle(selects).getPropertyValue('background-color');
  pixeLol.style.backgroundColor = selectedColor;
    
}
pixelBoards.addEventListener('click', colorPixel);


function clearPixel() {
  let clearPixel = document.querySelectorAll('.pixel');
  for (i = 0; i < clearPixel.length; i += 1) {
    clearPixel[i].style.backgroundColor = 'white';
  }
}
btn.addEventListener('click', clearPixel);


let colorBlack = document.getElementsByClassName('color')[0];
colorBlack.className = 'selected color';
