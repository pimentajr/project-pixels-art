// 4. O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento

function square(roww, column) {
  const tbl = document.getElementById('pixel-board');

  for (let index = 0; index < roww; index += 1) {
    const line = document.createElement('tr');

    for (let secondIndex = 0; secondIndex < column; secondIndex += 1) {
      const cells = document.createElement('td');
      cells.classList.add('pixel');
      line.appendChild(cells);
    }
    tbl.appendChild(line);
  }
}
square(5, 5);

// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels:
// Verifica se o elemento da cor preta possui, inicialmente, a classe selected

function classColor() {
  const color = document.querySelector('.black');
  color.classList.add('selected');
}
classColor();

// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

const colorPalette = document.querySelector('#color-palette');
const paletteList = colorPalette.children;

function selectedColor() {
  for (let fourthIndex = 0; fourthIndex < paletteList.length; fourthIndex += 1) {
    if (paletteList[fourthIndex].className.includes('selected')) {
      paletteList[fourthIndex].classList.remove('selected');
    }
  }
}
colorPalette.addEventListener('click', function (event) {
  if (event.target.id !== 'color-palette') {
    selectedColor();
    event.target.classList.add('selected');
  }
});

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const board = document.getElementById('pixel-board');

function pixel(event) {
  const selected = document.querySelector('.selected');
  const css = window.getComputedStyle(selected).getPropertyValue('background-color');
  event.target.style.backgroundColor = css;
}
board.addEventListener('click', pixel);
