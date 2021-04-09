let arrayColors = ['aqua', 'blue', 'fuchsia', 'gray', 'green','lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow', 'magenta', 'salmon'];

function getRandomColors (colors) {
  randomColor = colors[Math.floor((Math.random()*colors.length))];
  return randomColor;
}

// function createBoard() {
//   let board = document.getElementById('pixel-board');
//   for (let index = 0; index < 5; index += 1) {
//     let line = document.createElement('div');
//     line.classList.add('line');
//     board.appendChild(line);
//     for (let secondIndex = 0; secondIndex < 5; secondIndex += 1) {
//       let pixel = document.createElement('div');
//       pixel.classList.add('pixel');
//       line.appendChild(pixel);
//     }
//   }
// }

window.onload = function () {
  const getColors = document.getElementsByClassName('color');
  getColors[0].style.backgroundColor = 'black';
  for (let index = 1; index < getColors.length; index += 1) {
    getColors[index].style.backgroundColor = getRandomColors(arrayColors);
  }
  // createBoard();
}