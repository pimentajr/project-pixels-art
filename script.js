function setClassSelectd(event) {
  const colorsSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < colorsSelected.length; index += 1) {
    colorsSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const palletColors = document.querySelector('#color-palette');
palletColors.addEventListener('click', setClassSelectd);

function createPixelBoard(size) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let row = 0; row < size; row += 1) {
    //Criar div que representa a linha.
    const rowPixels = document.createElement('div');
    for (let column = 0; column < size; column += 1) {
      //Criar cada coluna da linha.
      const columnPixel = document.createElement('div');
      //Adicionar classe pixel a esse elemento
      columnPixel.className = 'pixel';
      //Adicionar a coluna na linha
      rowPixels.appendChild(columnPixel);
      columnPixel.style.backgroundColor = 'white';   
    }
    //Adicionar a linha ao tabuleiro.
    pixelBoard.appendChild(rowPixels);
  }
}

createPixelBoard(5);

function paintPixel(event) {
  // Descobrir qual a cor da paleta de cores está selecionada
  //Descobrir uma forma de pegar o background color do elemento que tem a classe selected
  //Adicionar este backgroundColor ao elemento clicado
  //event.target
  const currentColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const getColor = event.target;
    getColor.style.backgroundColor = currentColor;
  }
}
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', paintPixel);

