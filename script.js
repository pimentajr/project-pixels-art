const pixelBoard = document.getElementById('pixel-board');
const color = document.getElementsByClassName('color');
const palleteColor = document.getElementById('color-palette');
const pixel = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');

function createPixelBoard(input) {
  for (let r = 0; r < input; r += 1) {
    const row = document.createElement('div');
    pixelBoard.appendChild(row);
    row.className = 'row';
    row.style.backgroundColor = 'white';
    for (let c = 0; c < input; c += 1) {
      const cell = document.createElement('div');
      row.appendChild(cell);
      cell.className = 'pixel';
      cell.style.backgroundColor = 'white';
    }
  }
}
createPixelBoard(5);
palleteColor.onclick = function chosenColor(e) {
  const selectedColor = document.querySelector('.selected');
  if (selectedColor) {
    selectedColor.classList.remove('selected');
  }
  e.target.classList.add('selected');
}
pixelBoard.onclick = function toPaint(e) {
  const selectedColor = document.querySelector('.selected');
  if (e.target.className === 'pixel') {
    e.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
};
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  const  colors = '#';
  for (let index = 0; index < 6; index += 1) {
    colors += letters[Math.floor(Math.random() * 16)];
  }
  return colors;
}
function colorpalettes() {
  const palletes = ['black'];
  for (let index = 0; index < 3; index += 1) {
    palletes.push(getRandomColor());
  }

  for (let index = 0; index < color.length; index += 1) {
    color[index].style.backgroundColor = palletes[index];
  }
  return palletes;
}
colorpalettes();
buttonClear.onclick = function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
