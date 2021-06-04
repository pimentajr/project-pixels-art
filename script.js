/**
 * Cria um elemento div e atribui a ele a classe 'pixel'.
 */
function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}
/**
 * Cria quadro de pixels com 'num' linhas e 'num' colunas.
 */
function createPixelBoard(num) {
  const board = document.getElementById('pixel-board');
  for (let row = 0; row < num; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    for (let column = 0; column < num; column += 1) {
      pixelRow.appendChild(createPixel());
    }
    board.appendChild(pixelRow);
  }
}
createPixelBoard(5); // inicia o quadro com num=5.

/**
 * Coloca classe 'selected' no elemento através de event.target, ou seja, o alvo do evento, ou ainda, que disparou o evento.
 */
function selectedColor(event) {
  const selectedElementColor = event.target;
  const currentElementColor = document.querySelector('.selected'); // busca elemento com classe 'selected'
  if (currentElementColor !== null) { // se existir algum elemento com classe 'selected', ela é removida
    currentElementColor.classList.remove('selected');
  }
  selectedElementColor.classList.add('selected'); // adiciona a classe 'selected' no alvo (que disparou) do evento
}
/**
 * Captura o background color do elemento com a classe 'selected' e aplica no elemento que disparou o evento.
 * Ref: https://zellwk.com/blog/css-values-in-js/
 */
function colorSelectedPixel(event) {
  const pixel = event.target;
  const currentElementColor = document.querySelector('.selected');
  const style = getComputedStyle(currentElementColor);
  pixel.style.backgroundColor = style.backgroundColor;
}

/**
 * Adiciona um EventListener em todos os elementos da classe ecolhida (referredClass), para, ao sinal de um evento (eventName), seja executada a funcao indicada (functionToRun)
 * Ref: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
 * Ref: https://www.w3schools.com/jsref/jsref_foreach.asp
 * Ref: https://www.w3schools.com/js/js_arrow_function.asp
 */
function addEventListenerFunction(referredClass, eventName, functionToRun) {
  const classElementsList = document.querySelectorAll(referredClass);
  classElementsList.forEach((item) => {
    item.addEventListener(eventName, functionToRun);
  });
}

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((item) => {
    const pixelElement = item;
    pixelElement.style.backgroundColor = 'white';
  });
}

function inputValue() {
  let input = parseInt(document.getElementById('board-size').value, 10);
  if (input < 5) {
    input = 5;
  } else if (input > 50) {
    input = 50;
  }
  return input;
}

function removeBoard() {
  const rows = document.getElementById('pixel-board').children;
  const rowLength = rows.length;
  for (let index = 0; index < rowLength; index += 1) {
    rows[0].remove();
  }
}

function newBoard() {
  const input = inputValue();
  if (!input) {
    alert('Board inválido!');
  }
  removeBoard();
  createPixelBoard(input);
  addEventListenerFunction('.pixel', 'click', colorSelectedPixel);
}

window.onload = function init() {
  // createPixelBoard(5);
  const initialColor = document.querySelector('.color'); // busca o primeiro elemento com a classe 'color' que é o black
  initialColor.classList.add('selected'); // adiciona a classe 'selected' na cor black
  addEventListenerFunction('.color', 'click', selectedColor);
  addEventListenerFunction('.pixel', 'click', colorSelectedPixel);
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
  const vqvButton = document.getElementById('generate-board');
  vqvButton.addEventListener('click', newBoard);
};
