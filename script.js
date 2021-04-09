window.onload = function () {
  const pixelBoard = document.querySelector('#pixel-board').children;
  const initialColor = document.querySelector('#black');
  let color = initialColor.id;
  color.className = 'selected';
  
  
  
  const quant = 5;
  
  for (let index = 0; index < quant; index += 1) {
    for (let index2 = 0; index2 < quant; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard[index].appendChild(pixel);
    }
  }
};
