window.onload = function allFunction() {
  const numberOfBlock = 5;
  const section = document.querySelector('#pixel-board');
  const divBlack = document.querySelector('.black');
  divBlack.classList.add('selected');

  function blockPixel(size) {
    for (let index = 0; index < size; index += 1) {
      const pixelColumn = document.createElement('div');
      section.appendChild(pixelColumn);
      for (let indexOfLine = 0; indexOfLine < size; indexOfLine += 1) {
        const pixelLine = document.createElement('div');
        pixelLine.className = 'pixel';
        pixelColumn.appendChild(pixelLine);
      }
    }
  }
  blockPixel(numberOfBlock);
};
