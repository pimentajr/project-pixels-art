const colorPalette = document.querySelector('#color-palette');

// Cria uma linha
function createLine(className) {
  const line = document.createElement('div');
  line.className = className;
  return line;
}

// Preenche uma div
function populateDiv(div, className, qtd) {
  for (let lines = 1; lines <= qtd; lines += 1) {
    const line = createLine(className);
    div.appendChild(line);
  }
}

populateDiv(colorPalette, 'palette', 1);

// Cria uma caixa com base nas diferentes cores
/*
function createBox(boxColor) {
  const element = document.createElement('div');

  element.style.backgroundColor = boxColor;

  return element;
}
*/

// Colore as caixas
function createColor(boxColor) {
  const container = document.querySelector('.palette');
  const element = document.createElement('div');

  element.style.backgroundColor = boxColor;
  element.className = ('color');

  container.appendChild(element);
}

createColor('black');
createColor('red');
createColor('blue');
createColor('yellow');

/*
Adicione à página um quadro de pixels, com 25 pixels.

    O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

    O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

    A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

    O quadro de "pixels" deve aparecer abaixo da paleta de cores.

O que será verificado:

    Verifica se o quadro de pixels possui o id denominado pixel-board

    Verifica se cada pixel individual dentro do quadro possui a classe denominada pixel.

    Verifica se a cor inicial dos pixels dentro do quadro, ao abrir a página, é branca.

    Verifica se o quadro de pixels aparece abaixo da paleta de cores

*/
