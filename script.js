window.onload = function () {
  const pixelBoard = document.querySelector('#pixel-board').children;
  const pixelToColor = document.querySelector('#pixel-board');
  const colorPalette = document.querySelector('#color-palette');
  const clearBoard = document.getElementById('clear-board');
  let black = document.querySelector('#black');
  black.classList.add('selected');
  var color = 'black';
  const quant = 5;

  for (let index = 0; index < quant; index += 1) {
    for (let index2 = 0; index2 < quant; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard[index].appendChild(pixel);
    }
  }

  clearBoard.addEventListener('click', function(){
    window.location.reload();
    }
  )

  colorPalette.addEventListener('click', function(c) {
    document.querySelector('.selected').classList.remove('selected');
    c.target.classList.add('selected');
    color = document.querySelector('.selected').id;
  })

  pixelToColor.addEventListener('click', function(d) {
    let pixel = d.target;
    pixel.classList.add(color);
  })  

}

