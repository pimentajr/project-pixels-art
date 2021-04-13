const pixels = document.getElementsByClassName('pixel');
window.onload = () => {
  document.getElementById('black').classList.add('selected');

  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.classList.add('white');
  }
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

const allColors = document.getElementsByClassName('color');

for (let index = 0; index < allColors.length; index += 1) {
  const colorPickerElement = allColors[index];
  colorPickerElement.addEventListener('click', () => {
    const newColor = colorPickerElement.id;
    defineNewSelectedColor(newColor);
  });
}

for (let index = 0; index < pixels.length; index += 1) {
  const pixel = pixels[index];
  pixel.addEventListener('click', () => {
    const newColor = getActualColor();
    paintElement(pixel, newColor);
  });
}
