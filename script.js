const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'pink';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'lightblue';

window.onload = function() {
  function createBoard() {
    let pixelTable = document.getElementById('pixel-board');

    for (let i = 0; i < 5; i += 1) {
      let pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row';
      pixelTable.appendChild(pixelRow);

      for (let j = 0; j < 5; j += 1) {
        let pixelCell = document.createElement('div');
        pixelCell.className = 'pixel';
        pixelRow.appendChild(pixelCell);
        pixelCell.style.backgroundColor = 'white';
      }
    }
  }

createBoard();
}

