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

function generateBoard(param) {
  const tableFather = document.getElementById('pixel-board');
  for (let index = 0; index < param; index += 1) {
    const column = document.createElement('tr');
    for (let idx = 0; idx < param; idx += 1) {
      const row = document.createElement('td');
      row.classList.add('pixel');
      column.appendChild(row);
    }
    tableFather.appendChild(column);
  }
}

function isVerified() {
  const valueInput = document.getElementById('board-size').value;
  let sizeTable = valueInput;
  if (valueInput.length === 0) {
    return true;
  } 
  if (sizeTable < 5) {
    sizeTable = 5;
  } else if (sizeTable > 50) {
    sizeTable = 50;
  }
  return sizeTable;
}

function removeBoard() {
  const removeBoardParent = document.getElementById('pixel-board');
  while (removeBoardParent.lastElementChild) {
    removeBoardParent.removeChild(removeBoardParent.lastElementChild);
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
  const btnBoard = document.getElementById('generate-board');
  generateBoard('5');
  btnBoard.addEventListener('click', () => {
    if (isVerified () === true) { return alert ('Board inválido!'); }
    removeBoard();
    generateBoard(isVerified());
  });
}

window.onload = colorPalette;
