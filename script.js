// 4

const pixelBoard = document.getElementById('pixel-board');

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'pixelLine';
  pixelBoard.appendChild(pixelLine);
  for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixelLine.appendChild(pixelCell);
    pixelCell.style.backgroundColor = 'white';
  }
}
// Pintar .pixel

// cor inicial padrão preta 

let currentColor = 'black'; 
// guardar cor clicada 
let clickedPalette = document.getElementById('color-palette');
clickedPalette.addEventListener('click', function(){
  let clickedColor = event.target.style.backgroundColor;
  currentColor = clickedColor;
  console.log(currentColor);
})
// pintar pixel com a cor atual
let thePixelBoard = document.getElementById('pixel-board');
thePixelBoard.addEventListener('click', function(){
  let clickedPixel = event.target;
  clickedPixel.style.backgroundColor = currentColor;
})