function handleColorSelect(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const arrayColors = document.getElementsByClassName('color');
console.log(arrayColors);
for (let i = 0; i < arrayColors.length; i += 1) {
  const currentColorElement = arrayColors[i];
  currentColorElement.addEventListener('click', handleColorSelect);
}

function handlePixelSelected(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const compStyles = window.getComputedStyle(colorSelected);
  const backgroundColor = compStyles.getPropertyValue('background-color');
  event.target.style.backgroundColor = backgroundColor;
}

const arrayPixel = document.getElementsByClassName('pixel');
console.log(arrayPixel);
for (let i = 0; i < arrayPixel.length; i += 1) {
  const currentPixelElement = arrayPixel[i];
  currentPixelElement.addEventListener('click', handlePixelSelected);
}

const button = document.createElement('button');
const buttonContainer = document.getElementById('button-container');
buttonContainer.appendChild(button);
button.setAttribute('id', 'clear-board');
button.innerText = 'Limpar';
button.addEventListener('click', clean);

function clean(event) {
  const pixelColored = document.querySelectorAll('.pixel');
  //if (pixelColored tiver uma classe de background color ){
  // troca o background para branco
  //}
  console.log(pixelColored);
  event.pixelColored.style.backgroundColor = 'white';
}
