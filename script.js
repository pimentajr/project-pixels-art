const colorPaletteContainer = document.querySelector('#color-palette');
colorPaletteContainer.addEventListener('click', (event) => {
  const searchElement = document.querySelector('.selected');
  searchElement.classList.remove('selected');
  const colorPaletteSelected = event.target;
  colorPaletteSelected.classList.add('selected');
});
