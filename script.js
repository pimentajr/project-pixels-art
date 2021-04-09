const lines = 5;

function squareLines(value) {
  const square = document.getElementById('pixel-board');
  for (let index = 1; index <= value; index += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'lineSquare';
    square.appendChild(newLine);
  }
}

squareLines(lines);

function squareColuns() {
  const coluns = document.getElementsByClassName('lineSquare');
  for (let index = 0; index < coluns.length; index += 1) {
    for (let secondIndex = 1; secondIndex <= lines; secondIndex += 1) {
      const newColun = document.createElement('div');
      newColun.className = 'pixel white';
      coluns[index].appendChild(newColun);
    }
  }
}

squareColuns();

// 7
function changeClass(event) {
  const classToRemove = document.getElementsByClassName('color');
  for (let index = 0; index < classToRemove.length; index += 1) {
    classToRemove[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectColor() {
  const selection = document.getElementById('color-palette');
  selection.addEventListener('click', changeClass);
}

selectColor();

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

function addColor(event) {
  const colorselected = document.querySelector('.selected');
  const newClass = colorselected.classList[1];
  event.target.className = `pixel ${newClass}`;
}

function changeColor() {
  const pixelSquare = document.getElementById('pixel-board');
  pixelSquare.addEventListener('click', addColor);
}

changeColor();
