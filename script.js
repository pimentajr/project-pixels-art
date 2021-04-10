const palette = ['black', 'red', 'blue', 'yellow'];
const clearBoard = document.querySelector('#clear-board');
sessionStorage.color = 'black';

function colorSelectEvent(e) {
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    const element = colorPalette[i];
    if (element.className === 'color selected') {
      element.className = 'color';
    }
  }
  sessionStorage.color = e.target.style.backgroundColor;
  e.target.className = 'color selected';
}

function colorSetEvent(e) {
  e.target.style.backgroundColor = sessionStorage.color;
}

function clearEvent() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const element = pixels[i];
    element.removeAttribute('style');
  }
}

function createPalette() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < palette.length; i += 1) {
    color[i].style.backgroundColor = palette[i];
    color[i].onclick = colorSelectEvent;
  }
}

function createPixels(x, y) {
  for (let xi = 0; xi <= x; xi += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';
    for (let yi = 0; yi <= y; yi += 1) {
      const pixel = document.createElement('span');
      pixel.onclick = colorSetEvent;
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    document.body.appendChild(line);
  }
}

createPalette();
createPixels(5, 5);
clearBoard.addEventListener('click', clearEvent);
