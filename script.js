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
  for(let index = 1; index < colors.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.style.backgroundColor = colors[index];
    divColor.className = 'color';
    if (index === 1) divColor.classList.add('selected');
    const colorPalette = document.querySelector('#color-palette');
    colorPalette.appendChild(divColor);
  }
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
    let element = document.querySelector('.selected');
    let color = element.style.backgroundColor;
    console.log(element);
    event.target.style.backgroundColor = color;
  }
})
