function createPixel(column, line, pixelBoard) {
  for (let index = 0; index < column; index += 1) {
    for (let jIndex = 0; jIndex < line; jIndex += 1) {
      const elementCreated = document.createElement('div');
      elementCreated.className = 'pixel pixel-base white';
      pixelBoard.appendChild(elementCreated);
    }
  }
}

function selectColor(event) {
  const isSelected = event.target.classList[2];
  if (isSelected) {
    return;
  }
  const elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function pixelPainter(event) {
  const colorSelected = document.querySelector('.selected').classList[1];
  const pixelToChange = event.target;
  pixelToChange.classList.remove('white', 'black', 'blue', 'red', 'green');
  pixelToChange.classList.add(colorSelected);
}

window.onload = () => {
  const columnElements = 5;
  const lineElements = 5;
  const pixelBoard = document.querySelector('#pixel-board');
  const colorQuery = document.querySelectorAll('.color');
  console.log(colorQuery.length);

  createPixel(columnElements, lineElements, pixelBoard);

  for (let index = 0; index < colorQuery.length; index += 1) {
    colorQuery[index].addEventListener('click', selectColor);
  }

  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pixelPainter);
  }
};
