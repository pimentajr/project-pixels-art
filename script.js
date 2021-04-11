// Objetos HTML
// ex 7.
const colors = document.querySelectorAll('.color');
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
  for( let pixel = 0;pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white'; 
  }
}

// ex 8 ------ Refazer essa questão sozinho.
function colorPixel(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];
  let color = getComputedStyle(selectedColor).backgroundColor;
  let pixelSelected = event.target;
  pixelSelected.style.backgroundColor = color;
}
// Regras de negocio
for (const item of colors) {
  item.addEventListener('click', removeClass);
  item.addEventListener('click', addClass);
}

for (const px of pixels) {
  px.addEventListener('click', colorPixel);
}

limpar.addEventListener('click', clearPixel);
