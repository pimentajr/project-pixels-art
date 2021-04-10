function createBoxesDiv() {
  const selectPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDivs = document.createElement('div');
    selectPalette.appendChild(createDivs);
    createDivs.classList.add('color');
  }
  const arrayOfColors = ['black', 'blue', 'purple', 'violet'];
  const selectDivs = document.querySelectorAll('.color');
  selectDivs.forEach((box, index) => {
    const div = box; div.style.backgroundColor = arrayOfColors[index];
  });
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}
createBoxesDiv();
