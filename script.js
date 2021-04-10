function selectColor() {
  const colorPalette = document.querySelector('#color-palette ul');
  function addSelected(event) {
    const colorSelected = event.target;
    for (let index = 0; index < colorPalette.children.length; index += 1) {
      colorPalette.children[index].classList.remove('selected');
    }
    colorSelected.classList.add('selected');
  }
  colorPalette.addEventListener('click', addSelected);
}

function applyColor() {
  const pixelBoard = document.querySelector('#pixel-board');
  function printBoard(event) {
    const colorPrint = document.querySelector('.selected');
    const boxSelected = event.target;
    const color = colorPrint.classList[1];
    if (boxSelected.classList.length >= 2) {
      boxSelected.className = 'pixel';
    }
    console.log(color);
    boxSelected.classList.add(color);
  }
  pixelBoard.addEventListener('click', printBoard);
}

function clearBoard() {
  const containerButton = document.querySelector('#containerButton');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  containerButton.appendChild(button);

  function clear() {
    const color = document.querySelectorAll('.pixel');
    for (let index = 0; index < color.length; index += 1) {
      color[index].className = 'pixel';
    }
  }
  button.addEventListener('click', clear);
}

selectColor();
applyColor();
clearBoard();
