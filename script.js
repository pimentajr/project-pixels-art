const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'pink';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'lightblue';

window.onload = function () {
  function createBoard() {
    const pixelTable = document.getElementById('pixel-board');

    for (let i = 0; i < 5; i += 1) {
      const pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row';
      pixelTable.appendChild(pixelRow);

      for (let j = 0; j < 5; j += 1) {
        const pixelCell = document.createElement('div');
        pixelCell.className = 'pixel';
        pixelRow.appendChild(pixelCell);
        pixelCell.style.backgroundColor = 'white';
      }
    }
  }

  function colorSelect() {
    color[0].classList.add('selected');

    for (let i = 0; i < color.length; i += 1) {
      color[i].addEventListener('click', function () {
        for (let j = 0; j < color.length; j += 1) {
          color[j].className = 'color';
        }
        if (color[i].className !== 'color selected') {
          color[i].classList.add('selected');
        }
      });
    }
  }

  function colorPixel() {
    const pixelCell = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixelCell.length; i += 1) {
      pixelCell[i].addEventListener('click', function () {
        const selectedColor = document.querySelector('.selected');
        pixelCell[i].style.backgroundColor = selectedColor.style.backgroundColor;
      });
    }
  }

  function clearButton() {
    const button = document.getElementById('clear-board');
    const pixelCell = document.getElementsByClassName('pixel');

    button.addEventListener('click', function () {
      for (let i = 0; i < pixelCell.length; i += 1) {
        pixelCell[i].style.backgroundColor = 'white';
      }
    });
  }

  createBoard();
  colorSelect();
  colorPixel();
  clearButton();
};
