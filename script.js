function selectColors() {
  const colors = ['blue', 'red', 'green'];
  const paletlist = document.getElementsByClassName('color');
  paletlist[0].style.backgroundColor = 'black'
  paletlist[0].classList.add('selected');
  for (let index = 1; index < paletlist.length; index += 1) {
    paletlist[index].style.backgroundColor = colors[index - 1];
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
