const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');

colorPalette.addEventListener('click', (event) => {
  const color = document.querySelectorAll('.selected');
  color.forEach((element) => element.classList.remove('selected'));
  event.target.classList.add('selected');
});

pixelBoard.addEventListener('click', (events) => {
  const currentColor = document.querySelector('.selected');
  const colors = getComputedStyle(currentColor).backgroundColor;
  const pixels = events.target;
  pixels.style.backgroundColor = colors;
});

buttonClear.addEventListener('click', () => {
  const clearBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearBoard.length; i += 1) {
    clearBoard[i].style.backgroundColor = 'white';
  }
});
