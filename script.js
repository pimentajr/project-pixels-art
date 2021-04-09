function createColorPalette() {
  const colors = ['blue', 'red', 'green'];
  const palettelist = document.getElementsByClassName('color');
  palettelist[0].style.backgroundColor = 'black';
  palettelist[0].classList.add('selected');
  for (let index = 1; index < palettelist.length; index += 1) {
    palettelist[index].style.backgroundColor = colors[index - 1];
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

function selectColor(event) {
  const current = document.querySelector('.selected');
  current.classList.remove('selected');
  event.target.classList.add('selected');
}

function eventColorSelect() {
  const colorList = document.getElementsByClassName('color');
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].addEventListener('click', selectColor);
  }
}

function paintPixel(event) {
  const curentColor = document.querySelector('.selected').style.backgroundColor;
  const a = event.target;
  a.style.backgroundColor = curentColor;
}

function eventPrintColor() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].addEventListener('click', paintPixel);
  }
}

function clearBoard() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

function eventClear() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearBoard);
}

window.onload = function () {
  createColorPalette();
  createBoard();
  eventColorSelect();
  eventPrintColor();
  eventClear();
};
