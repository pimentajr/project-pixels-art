const divColors = document.getElementsByClassName('.color');

function setColorToPalette() {
  for (let index = 0; index < divColors.length; index += 1) {
    const idColorDivs = divColors[index].id;
    if (divColors[index].getElementsByClassName.backgroundColor !== 'black') {
      divColors[0].getElementsByClassName.backgroundColor = 'black';
    }
    divColors[index].getElementsByClassName.backgroundColor = idColorDivs;
  }
}
setColorToPalette();

window.onload = setBlack;

function setBlack() {
  const elementBlack = document.getElementById('black');
  elementBlack.classList.add('selected');
}

function getColor(event) {
  if (event.target.classList[0] === 'color') {
    const colorSelected = document.querySelectorAll('.selected');
    for (let index = 0; index < colorSelected.length; index += 1) {
      colorSelected[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', getColor);

function setColorToBoard() {
  let pixelBoard = document.getElementById('pixel-board')
  pixelBoard.addEventListener('click', function (e) {
    const colorSelected = document.querySelector('.selected');
    if(e.target.className === 'pixel') {
      const cor = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
      const clickedPixel = e.target;
      clickedPixel.style.background = cor;
    }
  })  
}
setColorToBoard();
