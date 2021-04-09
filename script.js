window.onload = function () {
  const pixelBoard = document.querySelector('#pixel-board').children;
  let color = document.querySelector('#black');
  const quant = 5;

  color.className = 'selected';

  for (let index = 0; index < quant; index += 1) {
    for (let index2 = 0; index2 < quant; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard[index].appendChild(pixel);
    }
  }
};
