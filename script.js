function setClassSelect(event) {
  const setAtributte = document.querySelectorAll('.color');
  for (let index = 0; index < setAtributte.length; index += 1) {
    setAtributte[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function getPixel(event) {
  const getColor = document.querySelectorAll('.color');
  let selectColor = '';
  for (let index = 0; index < getColor.length; index += 1) {
    if (getColor[index].classList[1] === 'selected') {
      selectColor = getColor[index].id;
    }
  }
  const targetPrint = event.target;
  targetPrint.style.backgroundColor = selectColor;
}

function clearPixels() {
  const clearPixelsAll = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixelsAll.length; index += 1) {
    clearPixelsAll[index].style.backgroundColor = 'white';
  }
}

function colorPalette() {
  document.getElementById('black').classList.add('selected');

  const clickPalette = document.getElementById('color-palette');
  clickPalette.addEventListener('click', setClassSelect);

  const clickPrint = document.getElementById('pixel-board');
  clickPrint.addEventListener('click', getPixel);

  const resetBtn = document.querySelector('.btn-style');
  resetBtn.addEventListener('click', clearPixels);
}

window.onload = colorPalette;
