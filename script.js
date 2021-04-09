window.onload = () => {
  function createPixel(column, line, pixelBoard) {
    for (let index = 0; index < column; index += 1) {
      for (let jIndex = 0; jIndex < line; jIndex += 1) {
        const elementCreated = document.createElement('div');
        elementCreated.className = 'pixel pixel-base white';
        console.log(elementCreated);
        pixelBoard.appendChild(elementCreated);
      }
    }
  }

  const columnElements = 5;
  const lineElements = 5;
  const pixelBoard = document.querySelector('#pixel-board');

  createPixel(columnElements, lineElements, pixelBoard);
};
