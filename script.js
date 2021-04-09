// aplicar a classe selected ao elemento que for clicado

// criar eventListener nos elementos html com classe pixel
// primeiro criar uma lista com todos esses elementos

let pixels = document.querySelectorAll('.color');

for (const pixel of pixels) {
  pixel.addEventListener('click', selectColor);
}

//funcao que aplica classe ao elemento html que chamou o event

function selectColor(event) {
  for (const pixel of pixels) {
    pixel.className = 'color';
  }
  event.target.classList.add('selected');
}
