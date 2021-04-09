function restoreColorSelection() {
  const colorPallet = document.querySelector('#color-palette');

  for (let index = 0; index < colorPallet.childElementCount; index += 1) {
    colorPallet.children[index].classList.remove('selected');
  }

  colorPallet.children[0]
    .classList
    .add('selected');
}

window.onload = () => {
  restoreColorSelection();
};
