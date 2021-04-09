// quesito 1
let elementH1 = document.getElementById('title');
elementH1.innerText = 'Paleta de Cores';

// quesito 2
function createPalettes() {
  for (let index = 0; index < 4; index += 1) {
    let palettes = document.createElement('div');
    let allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes();

// quesito 3
let squareColors = document.getElementsByClassName('color');
squareColors[0].style.backgroundColor = 'black';
squareColors[1].style.backgroundColor = 'red';
squareColors[2].style.backgroundColor = 'yellow';
squareColors[3].style.backgroundColor = 'green';

// quesito 4
function createMainBoard() {
  let mainBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    let columns = document.createElement('div');
    mainBoard.appendChild(columns);
    for (let jindex = 0; jindex < 5; jindex += 1) {
      let lines = document.createElement('div');
      columns.appendChild(lines);
      lines.className = 'pixel';
    }
  }
}
createMainBoard();
