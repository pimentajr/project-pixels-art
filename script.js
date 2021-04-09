window.onload = function() {
  function makePixelBoard(parent, line, column) {
    for (let index = 1; index <= line; index += 1) {
      let divLine = document.createElement('div');
      divLine.class = 'pixel-board-line';
      for (let index = 1; index <= column; index += 1) {
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        divPixel.style.backgroundColor = 'magenta';
        divLine.appendChild(divPixel);
      }
      parent.appendChild(divLine);
    }
  }

  let pixelBoard = document.querySelector('#pixel-board');
  makePixelBoard(pixelBoard, 5, 5);

}