function blackInit() {
  document.getElementById('black').className = 'color selected';
}

function selecionaCor(event) {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    const elementSelected = colorPalette[index];
    if (elementSelected === event.target) {
      elementSelected.classList.add('selected');
    } else {
      elementSelected.classList.remove('selected');
    }
  }
}

function paintingPixel(event) {
  event.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}

function boardListener() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paintingPixel);
  }
}

boardListener();

function boardWhite() {
  const pixelBoard = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    const elementWhite = pixelBoard[index];
    elementWhite.style.backgroundColor = 'white';
  }
}

const eventButton = document.getElementById('clear-board');
eventButton.addEventListener('click', boardWhite);

function requisitosIniciais() {
  blackInit();
  document.getElementById('color-palette').addEventListener('click', selecionaCor);
  document.getElementById('clear-board').addEventListener('click', boardWhite);
}
window.onload = requisitosIniciais;
