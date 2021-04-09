const colorPaletteContainer = document.querySelector('#color-palette');
colorPaletteContainer.addEventListener('click', (event) => {
  const searchElement = document.querySelector('.selected');
  searchElement.classList.remove('selected');
  const colorPaletteSelected = event.target;
  colorPaletteSelected.classList.add('selected');
});

const pixelBoardSquare = document.querySelector('#pixel-board');
pixelBoardSquare.addEventListener('click', (event2) => {
  const colorSelected = document.querySelector('.selected');
  console.log(colorSelected);
  const pixelToPrint = event2.target;
  console.log(pixelToPrint);
  pixelToPrint.style.backgroundColor = window.getComputedStyle(colorSelected).backgroundColor;
  console.log(window.getComputedStyle(colorSelected));  
});

// const buttonClearColor = document.querySelector('#clear-board');
// buttonClearColor.addEventListener
