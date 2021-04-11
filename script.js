// Objetos HTML
// ex 7.
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');

// Funções
function removeClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}
// Ex 7
function addClass(event) {
  event.target.classList.add('selected');
}

// ex 9
function clearPixel() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

// ex 8 ------ Refazer essa questão sozinho.
function colorPixel(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const color = getComputedStyle(selectedColor).backgroundColor;
  const pixelSelected = event.target;
  pixelSelected.style.backgroundColor = color;
}
// Regras de negocio

for (let item = 0; item < colors.length; item += 1) {
  let eventItem = colors[item];
  eventItem.addEventListener('click', removeClass);
  eventItem.addEventListener('click', addClass);
}

for (let px = 0; px < pixels.length; px += 1) {
  pixels[px].addEventListener('click', colorPixel);
}

limpar.addEventListener('click', clearPixel);
