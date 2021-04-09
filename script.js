function setSelectedClass(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');

  const newSelection = event.target;
  newSelection.classList.add('selected');
}

function paintPixel(event) {
  const activeSelector = document.querySelector('.selected');
  const color = getComputedStyle(activeSelector).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function clearAllPixels() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

const selectorElements = document.getElementsByClassName('color');
for (let index = 0; index < selectorElements.length; index += 1) {
  selectorElements[index].addEventListener('click', setSelectedClass);
}

const boardElement = document.getElementById('pixel-board');
boardElement.addEventListener('click', paintPixel);

const clearBoardButton = document.getElementById('clear-board');
clearBoardButton.addEventListener('click', clearAllPixels);
