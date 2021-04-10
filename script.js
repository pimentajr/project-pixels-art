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

selectColor();
applyColor();
