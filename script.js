function handleColorSelect(event) {
  console.log('fui clicado', event.target);
  let colorSelected = document.getElementsByClassName('selected')[0];
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

let arrayColors = document.getElementsByClassName('color');
console.log(arrayColors);
for (let i = 0; i < arrayColors.length; i += 1) {
  let currentColorElement = arrayColors[i];
  currentColorElement.addEventListener('click', handleColorSelect);
}

function handlePixelSelected(event) {
  console.log('fui clicado', event.target);
  let colorSelected = document.getElementsByClassName('selected')[0];
  let compStyles = window.getComputedStyle(colorSelected);
  let backgroundColor = compStyles.getPropertyValue('background-color');
  event.target.style.backgroundColor = backgroundColor;
}

let arrayPixel = document.getElementsByClassName('pixel');
console.log(arrayPixel);
for (let i = 0; i < arrayPixel.length; i += 1) {
  let currentPixelElement = arrayPixel[i];
  currentPixelElement.addEventListener('click', handlePixelSelected);
}
