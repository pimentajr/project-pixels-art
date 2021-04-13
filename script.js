window.onload = function () {
  document.getElementById('black').classList.add('selected');
}

//Requisito 4
let pixelBoardSize = 5;

for (let lineIndex = 0; lineIndex <= pixelBoardSize; lineIndex += 1 ) {
  const createColumnDivs = document.createElement('div');
  createColumnDivs.className = 'column-pixel';
  for (let columnIndex = 0; columnIndex <= pixelBoardSize; columnIndex +=1) {
    const createDivs = document.createElement('div');
    createDivs.className = 'pixel';
    createColumnDivs.appendChild(createDivs);
  }
  pixelBoard.appendChild(createColumnDivs);
}



function setColorAll (event) {
  let aux = document.querySelectorAll('.selected');
  for (let index = 0; index < aux.length; index +=1) {
    aux[index].classlist.remove('selected');
      
  }
  event.target.classList.add('selected');
}




const colorPalettes = document.querySelector('#color-palette');
colorPalettes.addEventListener('click', setColorAll);

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click',pxBoard);

function pxBoard(event) {
  let colorPixel = document.querySelector('.selected');
  const color = window.getComputedStyle(colorPixel).backgroundColor;
  event.target.style.backgroundColor = color;
}



function clearBoard () {
  const clPixel = document.querySelector('.pixel');
  for (let index = 0; index < clPixel.length; index =+1) {
    clPixel[index].style.backgroundColor = 'white';
  }
}
const button = document.getElementById('clear-board');
let pixels = document.querySelectorAll('.pixel');
button.addEventListener('click', clearBoard);
