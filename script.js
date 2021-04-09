function creatPallete() {
  const colorPalette = document.querySelector('#color-palette');
  const colors = ['black', 'red', 'orange', 'yellow'];

  for (let index = 0; index < colors.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
    colorPalette.appendChild(createDiv);

    if (index === 0) {
      createDiv.classList.add('selected');
    }
  }
}
creatPallete();

function pixelBoard(num) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let i = 0; i < num; i += 1) {
    const columns = document.createElement('div');
    pixelBoard.appendChild(columns);

    for (let j = 0; j < num; j += 1) {
      const lines = document.createElement('div');
      lines.className = 'pixel';
      columns.appendChild(lines);
    }
  }
}
pixelBoard(5);

function addClassSelect() {
  const selectColor = document.querySelector('#color-palette')
  selectColor.addEventListener('click', (event) => {
    let select = document.querySelector('.selected');
    event.target.classList.add('selected');
    if (event.target.classList == 'color selected') {
      select.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
addClassSelect();

function addColorPixel(){
  let pixelSelect = document.querySelector('#pixel-board');
  pixelSelect.addEventListener('click', (event) => {
    let colorSelect = document.querySelector('.selected')
    event.target.style.backgroundColor = colorSelect.style.backgroundColor;
  });
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
