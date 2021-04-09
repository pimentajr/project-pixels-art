
function criadorDePixels() {
 let quadro = document.getElementById('pixel-board');
 for (let coluna = 0; coluna < 5; coluna += 1) { 
  const createDadPixel = document.createElement('div');
  quadro.appendChild(createDadPixel);
  for (let linha = 0; linha < 5; linha += 1) {
   const createPixel = document.createElement('div');
   createPixel.className = 'pixel';
   createDadPixel.appendChild(createPixel);
  }
 } 
}
criadorDePixels()
