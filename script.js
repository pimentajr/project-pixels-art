//1
//feito no html

//2 e 3
const black = document.querySelectorAll('.color')[0];
black.style.backgroundColor = 'black';

const red = document.querySelectorAll('.color')[1];
red.style.backgroundColor = 'red';

const yellow = document.querySelectorAll('.color')[2];
yellow.style.backgroundColor = 'yellow';

const blue = document.querySelectorAll('.color')[3];
blue.style.backgroundColor = 'blue';

//4 e 5
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
   let pixelRow =  document.createElement('div');
   pixelRow.className = 'pixelRow';
   pixelBoard.appendChild(pixelRow);
    
   for (let j = 0; j < 5; j += 1) {
      let pixelCell = document.createElement('div');
      pixelCell.className = 'pixel';
      pixelRow.appendChild(pixelCell);
      pixelCell.style.backgroundColor = 'white';
    }
}

//6 e 7
const paletaCores = document.querySelector('#color-palette');

function selectedColor() {
  paletaCores.addEventListener('click', (event) => {
    const cor = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      cor.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectedColor();

//ex 8
pixelBoard.addEventListener('click', (event) => {
    const actualColor = document.querySelector('.selected').id;
    if (event.target.className === 'pixel') {
      const evTarget = event.target;
      evTarget.style.backgroundColor = actualColor;
    }
  });