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
      newColun.className = 'pixel';
      coluns[index].appendChild(newColun);
    }
  }
}

squareColuns();

function changeClass(event) {
  const classToRemove = document.getElementsByClassName('color');
  for (let index = 0; index < classToRemove.length; index += 1) {
    classToRemove[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectColor() {
  const selection = document.getElementById('color-container');
  selection.addEventListener('click', changeClass);
}

selectColor();
