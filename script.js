window.onload = function () {
  let black = document.getElementById('black');
  let blackColor = black.style.backgroundColor;
  black.classList.add('selected');
  sessionStorage.setItem('color', blackColor);
};

let pixelBoard = document.getElementById('pixel-board');

// Cria um quadro de pixels.
for (let index = 0; index < 25; index += 1) {
  let pixel = document.createElement('div');
  pixelBoard.appendChild(pixel);
  pixel.className = 'pixel';
}

// Remove a classe 'seleção' de uma cor.
function SelectRemotion() {
  let Palette = document.getElementsByClassName('color');
  for (let colorIndex = 0; colorIndex < Palette.length; colorIndex += 1) {
    Palette[colorIndex].classList.remove('selected');
  }
}

// Ao clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
palette.addEventListener('click', function(event) {
  SelectRemotion;
  let selectedColor = event.target;
  selectedColor.classList.add('selected');
  sessionStorage.setItem('color', selectedColor.style.background);
});

// Pinta um pixel ao ser clicado.
pixelBoard.addEventListener('click', function(event) {
  let pixelColored = event.target;
  pixelColored.style.background = sessionStorage.getItem('color');
});

// Pinta de branco todos os pixels.
function clearPixels() {
  let pixels = document.getElementById('pixel');
  for (let index2 = 0; index2 < pixel.length; index2 += 1) {
    pixels[index2].style.backgroundColor = 'white';
  }
}

// Clique no botão
function clearButton() {
  let button = document.getElementsByTagName('button');
  button.addEventListener('click', clearPixels);
}
