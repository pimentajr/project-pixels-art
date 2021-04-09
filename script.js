function selectColors() {
  const colors = ['black', 'blue', 'red', 'green'];
  const paletlist = document.getElementsByClassName('color');
  for (let index = 0; index < paletlist.length; index += 1) {
    paletlist[index].style.backgroundColor = colors[index];
  }
}

function createBoard() {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    board.appendChild(line);
    for (let secondIndex = 0; secondIndex < 5; secondIndex += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}
window.onload = function () {
  selectColors();
  createBoard();
};
