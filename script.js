function makePixelBoard(line, column) {
  for (let index = 1; index <= line; index += 1) {
    const divLine = document.createElement('div');
    divLine.class = 'pixel-board-line';
    for (let indexLine = 1; indexLine <= column; indexLine += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
    document.querySelector('#pixel-board').appendChild(divLine);
  }
}

function makeColorPalette(colors) {
  for (let index = 1; index < colors.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.style.backgroundColor = colors[index];
    divColor.className = 'color';
    if (index === 1) divColor.classList.add('selected');
    const colorPalette = document.querySelector('#color-palette');
    colorPalette.appendChild(divColor);
  }
}

// Font https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function clearBoardPixels() {
  const pixelBoard = document.querySelector('#pixel-board');
  // Tirar a dúvida de porque não funciona
  // const pixels = pixelBoard.children;
  // for (let index = 0; index < pixels.length; index += 1) {
  //   console.log(pixels[index]);
  //   pixelBoard.removeChild(pixels[index]);
  // }
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function validateNumber(number) {
  if (number < 5) number = 5;
  if (number > 50) number = 50;
  return number;
}

window.onload = function () {
  makeColorPalette(['white', 'black', 'red', 'green', 'blue']);
  makePixelBoard(5, 5);
};

document.querySelector('#color-palette').addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
});

document.querySelector('#pixel-board').addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const color = document.querySelector('.selected').style.backgroundColor;
    const styleOfElement = event.target.style;
    styleOfElement.backgroundColor = color;
  }
});

document.querySelector('#clear-board').addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.backgroundColor = 'white';
  }
});

document.querySelector('#generate-board').addEventListener('click', () => {
  let input = document.querySelector('#board-size');
  if (input.value == '') alert('Board inválido!');
  else {
    let numberInput = input.value;
    clearBoardPixels();
    makePixelBoard(validateNumber(numberInput), validateNumber(numberInput));
  }
});
