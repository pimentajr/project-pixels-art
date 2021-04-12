function creatPallete() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'red', 'orange', 'yellow'];

  for (let index = 0; index < colors.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('color');
    createDiv.style.backgroundColor = colors[index];
    colorPalette.appendChild(createDiv);

    if (index === 0) {
      createDiv.classList.add('selected');
    }
  }
}
creatPallete();

function pixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const inputLines = document.querySelector('#board-size').value;

  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  
  for (let i = 0; i < inputLines; i += 1) {
    const columns = document.createElement('div');
    pixelBoard.appendChild(columns);
    for (let j = 0; j < inputLines; j += 1) {
      const lines = document.createElement('div');
      lines.classList.add('pixel');
      columns.appendChild(lines);
    }
  }
}
pixelBoard();

const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', function(event) {
  event.preventDefault();
  pixelBoard();
});

function addClassSelect() {
  const selectColor = document.querySelector('#color-palette');
  selectColor.addEventListener('click', (event) => {
    const select = document.querySelector('.selected');
    event.target.classList.add('selected');
    if (event.target.classList == 'color selected') {
      select.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
addClassSelect();

function addColorPixel() {
  const pixelSelect = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelSelect.length; i += 1) {
    pixelSelect[i].addEventListener('click', function () {
      pixelSelect[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}
addColorPixel();

function clearPixel() {
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((item) => {
      item.style.backgroundColor = 'white';
    });
  });
}
clearPixel();

// function createGrid() {
//   const boardSize = document.querySelector('#board-size').value;
//   const pixelCanvas = document.querySelector('#pixel-board');
//   while (pixelCanvas.firstChild) {
//     pixelCanvas.removeChild(pixelCanvas.firstChild);
//   }
//   for (let i = 0; i < boardSize; i += 1) {
//     let createLines = document.createElement('div');
//     pixelCanvas.appendChild(createLines);
//     for (let j = 0; j < boardSize; j += 1) {
//       let createColumns = document.createElement('div');
//       createLines.appendChild(createColumns);
//     }
//   }
// }
// createGrid()
// const sizePicker = document.querySelector('#size-picker');
// sizePicker.addEventListener('submit', function(event) {
//   event.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
//   createGrid();
// });
