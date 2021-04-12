const pixelBoards = document.getElementById('pixel-board');
const btn = document.getElementById('clear-board');
const title = document.querySelector('#title');
const current = document.getElementsByClassName('selected');
const colorPalette = document.querySelectorAll('#color-palette>button');

function makeTitle() {
  title.innerHTML = 'Paleta de Cores';
}

// https://www.w3schools.com/howto/howto_js_active_element.asp
function selectedColor() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].className = 'color';
    colorPalette[i].addEventListener('click', function() {
      current[0].className = current[0].className.replace('selected', '');
      this.className = 'selected color';
    });
  }
}

function makeDivs() {
  for (let i = 1; i <= 25; i += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    pixelBoards.appendChild(pixelDiv);
  }
}

function colorPixel(event) {
  const selects = document.querySelector('.selected');
  const pixeLol = event.target;
  const selectColor = window.getComputedStyle(selects).getPropertyValue('background-color');
  pixeLol.style.backgroundColor = selectColor;
}

pixelBoards.addEventListener('click', colorPixel);

function clearPixel() {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearPixel.length; i += 1) {
    clearPixel[i].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', clearPixel);



selectedColor();
makeTitle();
makeDivs();

const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.className = 'selected color';

