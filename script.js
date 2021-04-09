const colorSelectedClass = 'selected';

function getColorPallet() {
  return document.querySelector('#color-palette');
}

function getPixelBoard() {
  return document.querySelector('#pixel-board');
}

function clearColorSelection() {
  const colorPallet = getColorPallet();
  for (let index = 0; index < colorPallet.childElementCount; index += 1) {
    colorPallet
      .children[index]
      .classList
      .remove(colorSelectedClass);
  }
}

function restoreColorSelection() {
  clearColorSelection();
  getColorPallet()
    .children[0]
    .classList
    .add(colorSelectedClass);
}

function getSelectedColor() {
  return getComputedStyle(
    getColorPallet().querySelector('.selected'),
  )
    .backgroundColor;
}

function selectColor(colorId) {
  clearColorSelection();
  getColorPallet().querySelector(`#${colorId}`)
    .classList
    .add(colorSelectedClass);
}

function onClickColorPallet(event) {
  selectColor(event.target.id);
}

function setPixelColor(pixel) {
  const selectedColor = getSelectedColor();
  console.log(selectedColor);
  if (pixel.style.backgroundColor === selectedColor) {
    return;
  }

  // Como resolver este lint warning?
  // eslint-disable-next-line no-param-reassign
  pixel.style.backgroundColor = selectedColor;
}

function onClickPixelBoard(event) {
  setPixelColor(event.target);
}

function bindListeners() {
  getColorPallet().onclick = onClickColorPallet;
  getPixelBoard().onclick = onClickPixelBoard;
}

window.onload = () => {
  restoreColorSelection();
  bindListeners();
};
