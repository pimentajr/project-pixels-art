window.onload = () => {
  document.getElementById('black').classList.add('selected');
};

function getSelectedColorElement() {
  const selectedElements = document.getElementsByClassName('selected');
  return selectedElements[0];
}

function getActualColor() {
  const selectedColor = getSelectedColorElement();
  return selectedColor.id;
}

function clearSelectedColor() {
  const selectedColor = getSelectedColorElement();
  selectedColor.classList.remove('selected');
}

function selectColor(color) {
  clearSelectedColor();
  const colorToSelect = document.getElementById(color);
  colorToSelect.classList.add('selected');
}

const allColors = document.getElementsByClassName('color');

for (const color of allColors) {
  color.addEventListener('click', () => {
    selectColor(color.id);
  });
}
