// aplicar a classe selected ao elemento que for clicado

// criar eventListener nos elementos html com classe pixel
// primeiro criar uma lista com todos esses elementos

let colors = document.querySelectorAll('.color');

for (const pixel of colors) {
  pixel.addEventListener('click', selectColor);
}

//funcao que aplica classe ao elemento html que chamou o event

function selectColor(event) {
  for (const pixel of colors) {
    pixel.className = 'color';
  }
  event.target.classList.add('selected');
}

// aplicar eventListener em todos os pixels

let pixels = document.querySelectorAll('.pixel');

for (const pixel of pixels) {
  pixel.addEventListener('click', colorizePixel);
}

// criar funcao que aplica a backgroundcolor do elemento html que tem como classname 'color selected'
// ao backgroundcolor do elemento que chamou o evento

function colorizePixel(event) {
  let color = document.querySelector('.color.selected').style.backgroundColor;

  event.target.style.backgroundColor = color;
}
