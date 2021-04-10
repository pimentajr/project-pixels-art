window.onload = function() {
  function setColor(color) {
    let pixels = document.querySelectorAll(".pixel")
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = color
    console.log(pixels)
  }
  }

  const title = document.querySelector('#title');
  title.innerHTML = 'Paleta de Cores';

  let colorPalette = document.querySelectorAll('#color-palette>button')
  for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].className = 'color';
  colorPalette[i].addEventListener('click', function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className = " selected color";
    });
  }

  let pixelBoards = document.getElementById('pixel-board');
  for (let i = 1; i <= 25; i += 1) {
  let pixelDiv = document.createElement('div');
  pixelDiv.className = 'pixel';
  pixelBoards.appendChild(pixelDiv);
  }
  let colorBlack = document.getElementsByClassName('color')[0];
  colorBlack.className = 'selected color';
}

