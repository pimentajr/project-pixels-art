const colorSelectedClass = 'selected';

function getColorPallet() {
  return document.querySelector('#color-palette');
}

function clearColorSelection() {
  const colorPallet = getColorPallet();
  for (let index = 0; index < colorPallet.childElementCount; index += 1) {
    colorPallet.children[index].classList.remove(colorSelectedClass);
  }
}

function restoreColorSelection() {
  clearColorSelection();
  getColorPallet()
    .children[0]
    .classList
    .add(colorSelectedClass);
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

function bindListeners() {
  getColorPallet().onclick = onClickColorPallet;
}

window.onload = () => {
  restoreColorSelection();
  bindListeners();
};
