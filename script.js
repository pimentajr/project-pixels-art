// requisito 2 e 3
const black = document.querySelectorAll('.color')[0];
black.style.backgroundColor = 'black';
const red = document.querySelectorAll('.color')[1];
red.style.backgroundColor = 'red';
const green = document.querySelectorAll('.color')[2];
green.style.backgroundColor = 'green';
const blue = document.querySelectorAll('.color')[3];
blue.style.backgroundColor = 'blue';
// requisitos 4 e 5
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  const pixelRow = document.createElement('div');
  pixelRow.className = 'pixelRow';
  pixelBoard.appendChild(pixelRow);

  for (let x = 0; x < 5; x += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixelRow.appendChild(pixelCell);
    pixelCell.style.backgroundColor = 'white';
  }
}
// requisito 7
const palette = document.querySelector('#color-palette');
function selectedColor() {
  palette.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      color.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

selectedColor();

// requisito 8
// pixelBoard.addEventListener('click', (event) => {

//   const actualColor = document.querySelector('.selected').id;
//   if (event.target.id === 'pixel') {
//     const targetCube = event.target;
//     targetCube.style.backgroundColor = actualColor
//   }
// });
// }
