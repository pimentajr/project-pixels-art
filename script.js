function setColorPalette() {
  const color = document.querySelectorAll('.color');
  const arrColors = ['black', 'red', 'blue', 'yellow'];
  for (let index = 0; index < arrColors.length; index += 1) {
    color[index].style.backgroundColor = arrColors[index];
  }
  document.getElementsByClassName('color')[0].classList.add('selected');
  console.log(color);
}

setColorPalette();

function generatePixels() {
  const board = document.querySelector('#pixel-board');
  const table = document.createElement('table');
  board.appendChild(table);

  for (let index = 0; index < 5; index += 1) {
    const tr = document.createElement('tr');
    for (let secondIndex = 0; secondIndex < 5; secondIndex += 1) {
      const td = document.createElement('td');
      const div = document.createElement('div');
      div.classList.add('pixel');
      td.appendChild(div);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

generatePixels();
