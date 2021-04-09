function selectColor() {
  const colorPalette = document.querySelector('#color-palette ul');
  function addSelected(event) {
    const colorSelected = event.target;
    for (let index = 0; index < colorPalette.children.length; index += 1) {
      colorPalette.children[index].classList.remove('selected');
    }
    colorSelected.classList.add('selected');
  }
  colorPalette.addEventListener('click', addSelected);
}

selectColor();
