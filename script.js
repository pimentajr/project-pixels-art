const color = document.getElementsByClassName('color');


function randomColor() {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);

  if (randomColor1 === 0 && randomColor2 === 0 && randomColor3 === 0) {
    randomColor1 = Math.floor(Math.random() * 255);
    randomColor2 = Math.floor(Math.random() * 255);
    randomColor3 = Math.floor(Math.random() * 255);
  } else if (randomColor1 === 255 && randomColor2 === 255 && randomColor3 === 255) {
    randomColor1 = Math.floor(Math.random() * 255);
    randomColor2 = Math.floor(Math.random() * 255);
    randomColor3 = Math.floor(Math.random() * 255);
  }
  return `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

color[0].style.backgroundColor = 'black'
color[1].style.backgroundColor = randomColor();
color[2].style.backgroundColor = randomColor();
color[3].style.backgroundColor = randomColor();


window.onload = function () {
  function createBoard(size) {
    const pixelTable = document.getElementById('pixel-board');

    for (let i = 0; i < size; i += 1) {
      const pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row';
      pixelTable.appendChild(pixelRow);

      for (let j = 0; j < size; j += 1) {
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

  function createInputBoard() {
    const pixelTable = document.getElementById('pixel-board');
    const input = document.getElementById('board-size');
    const button = document.getElementById('generate-board');

    button.addEventListener('click', function () {
      if (input.value.length === 0) {
        alert('Board inválido!');
      } else {
        if (input.value < 5) {
          input.value = 5;
        } else if (input.value > 50) {
          input.value = 50;
        }
        pixelTable.innerHTML = '';
        createBoard(input.value);
      }
    });

    input.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        if (input.value.length === 0) {
          alert('Board inválido!');    
        } else {
          if (input.value < 5) {
            input.value = 5;
          } else if (input.value > 50) {
            input.value = 50;
          }
          pixelTable.innerHTML = '';
          createBoard(input.value);
        }
      }
    });
  }

  createBoard(5);
  colorSelect();
  colorPixel();
  clearButton();
  createInputBoard();
};
