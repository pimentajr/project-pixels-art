// 7.

function selectedTarget(event) {
  const colorList = document.querySelectorAll('.color');

  for (let index = 0; index < colorList.length; index += 1) {
    if (colorList[index].className !== 'color') {
      colorList[index].className = 'color';
    }
  }

  if (event.target.className === 'color') {
    event.target.classList.add('selected');
  }
}

const colorPallete = document.querySelector('#color-palette');
colorPallete.addEventListener('click', selectedTarget);

// 8.

function selectColor(event) {
  const color = document.querySelector('.selected').id;

  const evento = event;

  if (evento.target.className === 'pixel') {
    evento.target.style.backgroundColor = color;
  }
}

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', selectColor);

// 9.

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', clearPixels);

// 10.

// função para remover os containers
function removePixelBoardChild() {
  const pixelBoardChildren = document.querySelector('#pixel-board').children;
  const pixelBoardSize = pixelBoardChildren.length;

  for (let index = pixelBoardSize - 1; index < pixelBoardSize && index >= 0; index -= 1) {
    pixelBoard.removeChild(pixelBoardChildren[index]);
  }
}

function changePixelBoard() {
  const BoardSizevalue = document.getElementById('board-size').value;
  if (BoardSizevalue === '') {
    window.alert('Board inválido!');
  }

  removePixelBoardChild();
}

const generateBoardButton = document.getElementById('generate-board');
generateBoardButton.addEventListener('click', changePixelBoard);
