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

function defineNewSelectedColor(targetID) {
  clearSelectedColor();
  const htmlElementToUpdate = document.getElementById(targetID);
  htmlElementToUpdate.classList.add('selected');
}

// N sei resolver os erros do ESLint!
function paintElement(elementToBePainted, colorToPaint) {
  elementToBePainted.className = 'pixel';
  elementToBePainted.classList.add(colorToPaint);
}

const pixels = document.getElementsByClassName('pixel');

const allColors = document.getElementsByClassName('color');

for (const colorPickerElement of allColors) {
  colorPickerElement.addEventListener('click', () => {
    const newColor = colorPickerElement.id;
    defineNewSelectedColor(newColor);
  });
}

for (const pixel of pixels) {
  pixel.addEventListener('click', () => {
    const newColor = getActualColor();
    paintElement(pixel, newColor);
  });
}
