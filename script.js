function selectInitialColor() {
  document.getElementById('color-1').className = 'color selected';
}

// function getTargetElementById(targetElement) {
//   const targetId = targetElement.id;
//   const element = document.getElementById(targetId);
//   return element;
// }

function classSwaper(targetElement) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === targetElement) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function colorSelector(targetElement) {
  const selectedElementColor = getComputedStyle(targetElement).backgroundColor;
  return selectedElementColor;
}

function setSelectedColor(event) {
  const targetElement = event.target;
  classSwaper(targetElement);
  colorSelector(targetElement);
}

function pageStarter() {
  selectInitialColor();
  document
    .getElementById('color-palette')
    .addEventListener('click', setSelectedColor);
}

window.onload = pageStarter;
