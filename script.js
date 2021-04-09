window.onload = function () {
  function makePixelBoard(parent, line, column) {
    for (let index = 1; index <= line; index += 1) {
      const divLine = document.createElement('div');
      divLine.class = 'pixel-board-line';
      for (let indexLine = 1; indexLine <= column; indexLine += 1) {
        const divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        divLine.appendChild(divPixel);
      }
      parent.appendChild(divLine);
    }
  }

  let pixelBoard = document.querySelector('#pixel-board');
  makePixelBoard(pixelBoard, 5, 5);
};
