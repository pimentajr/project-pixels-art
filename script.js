function primaryColors(colors) {
  const colorBox = document.querySelectorAll('.color');

  for (let index = 0; index < colors.length; index += 1) {
    colorBox[index].style.backgroundColor = colors[index];
  }
}

primaryColors(['black', 'yellow', 'green', 'blue']);

function pixelsTable(width, height) {
  const table = document.querySelector('#pixel-board');
  table.style.width = [width * 40, 'px'].join('');
  table.style.height = [height * 40 + 'px'].join('');
  for (let index = 1; index <= height; index += 1) {
    const newColumn = document.createElement('tr');
    for (let index2 = 1; index2 <= width; index2 += 1) {
      const newLine = document.createElement('td');
      newLine.className = 'pixel white';
      newColumn.appendChild(newLine);
    }
    table.appendChild(newColumn);
  }
}

pixelsTable(5, 5);
