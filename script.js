// 4. O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento

function square(roww, column) {
  const tbl = document.getElementById('pixel-board');

  for (let index = 0; index < roww; index += 1) {
    let line = document.createElement('tr');

    for (let secondIndex = 0; secondIndex < column; secondIndex += 1) {
      let cells = document.createElement('td');
      cells.classList.add('pixel');
      line.appendChild(cells);
    }
    tbl.appendChild(line);
  }
}
square(5, 5);