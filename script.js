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
colorPalette.addEventListener('click', function (events) {
  if (events.target.id !== 'color-palette') {
    selectedColor();
    events.target.classList.add('selected');
  }
});

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const board = document.getElementById('pixel-board');

function pixel(events) {
  const selected = document.querySelector('.selected');
  const css = getComputedStyle(selected).getPropertyValue('background-color');
  events.target.style.backgroundColor = css;
}
board.addEventListener('click', pixel);

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco:

const pixels = document.getElementsByClassName('pixel');

function buttonClear() {
  for (let thirdIndex = 0; thirdIndex < pixels.length; thirdIndex += 1) {
    pixels[thirdIndex].style.backgroundColor = 'white';
  }
}
const button = document.getElementById('clear-board');
button.addEventListener('click', buttonClear);

// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

function createBoard() {
  const buttVqv = document.querySelector('#generate-board');
  const boardSize = document.querySelector('#board-size');

  buttVqv.addEventListener('click', () => {
    board.innerHTML = '';
    let size = boardSize.value;
    if (!size) {
      return alert('Board inválido!');
    }
    // 11 - Limite o tamanho mínimo e máximo do board.
    if (size < 5) {
      size = 5;
    } else if (size > 50) {
      size = 50;
    }
    square(size, size);
  });
}
createBoard();
buttonClear();

// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página:

function createRandom() {
const paletteColors = document.querySelectorAll('.color');
for (let index6 = 1; index6 < paletteColors.length; index6 += 1) {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  
  paletteColors[index6].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
}
}
createRandom();