// Substitui a claasse por "color selected", assim por padrão a cor selecionada é a preta
function corInicial() {
  document.getElementById('first-color').className = 'color selected';
}

// Aqui um laço, que quando uma cor é selecionada, as outras perdem o selected se tiverem
function setSelectedColor(event) {
  const palette = document.getElementsByClassName('color');
  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === event.target) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

//  função que pinta o pixel, querySelector p pegar o elemento q estiver com o .selected
function setColor(event) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

// laço p percorrer todos os elementos q tiverem classe pixel e add background white, 
function clearBoard() {
  const boardItems = document.getElementsByClassName('pixel');
  for (let index = 0; index < boardItems.length; index += 1) {
    const element = boardItems[index];
    element.style.backgroundColor = 'white';
  }
}

function pageStarter() {
  corInicial();
  document
    .getElementById('color-palette')
    .addEventListener('click', setSelectedColor);
  document.getElementById('pixel-board').addEventListener('click', setColor);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
}

window.onload = pageStarter;
