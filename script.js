const colorSelectedClass = 'selected';
let colorPallet;

function clearColorSelection() {
  for (let index = 0; index < colorPallet.childElementCount; index += 1) {
    colorPallet.children[index].classList.remove(colorSelectedClass);
  }
}

function restoreColorSelection() {
  clearColorSelection();
  colorPallet
    .children[0]
    .classList
    .add(colorSelectedClass);
}

function selectColor(colorId) {
  clearColorSelection();
  colorPallet.querySelector(`#${colorId}`)
    .classList
    .add(colorSelectedClass);
}

function onClickColorPallet(event) {
  selectColor(event.target.id);
}

function bindListeners() {
  colorPallet.onclick = onClickColorPallet;
}

window.onload = () => {
  colorPallet = document.querySelector('#color-palette');
  restoreColorSelection();
  bindListeners();
};
