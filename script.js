// 4

const pixelBoard = document.getElementById('pixel-board');

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.className = 'pixel';
      pixelLine.appendChild(pixelCell);
      pixelCell.style.backgroundColor = 'white';
  }
}

// 6
// const paletteColors = document.querySelector('#color-palette');

// function selectColor() {
//   paletteColors.addEventListener('click', (event) => {
//     const color = document.querySelector('.selected');
//     if (event.target.id !== 'color-palette') {
//       color.classList.remove('selected');
//       event.target.classList.add('selected');
//     }
//   });
// }

// selectColor();

// // 7-8
// pixBoard.addEventListener('click', (event) => {
//   const selectedColor = document.querySelector('.selected').id;
//   if (event.target.className === 'pixel') {
//     const pixelSelected = event.target;
//     pixelSelected.style.backgroundColor = selectedColor;
//   }
// });

// // 9

// const cleartableButton = document.getElementById('clear-board');

// cleartableButton.innerText = 'Limpar';

// cleartableButton.addEventListener('click', () => {
//   const pixel = document.querySelectorAll('.pixel');
//   for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].style.backgroundColor = 'white';
//   }
// });