// Requisito 2 e 6
function createPalette() {
  const colorPalette = document.createElement('div');
  colorPalette.id = 'color-palette';
  const header = document.querySelector('header');
  header.appendChild(colorPalette);
  for (let index = 0; index < 4; index += 1) {
    const colors = document.createElement('div');
    colors.classList.add('color');
    colorPalette.appendChild(colors);
  }
  colorPalette.firstElementChild.classList.add('selected');
}
createPalette();

// Requisito 4
function createPixelBoard(valueInput) {
  const pixelBoard = document.createElement('div');
  document.body.appendChild(pixelBoard);
  pixelBoard.id = 'pixel-board';
  for (let lines = 0; lines < valueInput; lines += 1) {
    const line = document.createElement('tr');
    pixelBoard.appendChild(line);
    for (let columns = 0; columns < valueInput; columns += 1) {
      const column = document.createElement('td');
      column.classList.add('pixel');
      line.appendChild(column);
    }
  }
}
createPixelBoard(5);

// Requisito 7
function changeSelection(event) {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', changeSelection);

// Requisito 8
/*
* Para a solucionar esse requisito, consultei a Pull Request de Islene Gomes.
* link: https://github.com/tryber/sd-011-project-pixels-art/pull/146/
*/
const framePwd = document.querySelector('#pixel-board');
function paintPixel(event) {
  const colorClassSelected = document.querySelector('.selected');
  const colorCurrent = getComputedStyle(colorClassSelected).backgroundColor; // A função getComputedStyle retorna todos as propriedades do CSS que foram usadas para renderizar um elemento na tela.
  const even = event.target;
  even.style.backgroundColor = colorCurrent;
}
framePwd.addEventListener('click', paintPixel);

// Requisito 9
function createButtonClearPixels() {
  const section = document.createElement('section');
  const header = document.querySelector('header');
  header.appendChild(section);
  const btnClearPixels = document.createElement('button');
  section.appendChild(btnClearPixels);
  btnClearPixels.id = 'clear-board';
  btnClearPixels.innerText = 'Limpar';
}
createButtonClearPixels();

const btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', () => {
  const box = document.querySelectorAll('.pixel');
  for (let index = 0; index < box.length; index += 1) {
    box[index].style.backgroundColor = 'white';
  }
});

// Requisito 10
function createInputAndButton() {
  const section = document.querySelector('section');
  const input = document.createElement('input');
  input.id = 'board-size';
  input.min = '1';
  input.type = 'number';
  section.appendChild(input);
  const btnVQV = document.createElement('button');
  btnVQV.id = 'generate-board';
  btnVQV.innerText = 'VQV';
  section.appendChild(btnVQV);
}
createInputAndButton();

function clearInput() {
  document.querySelector('input').value = '';
}

// Requisito 11
function validationInput(valueInput) {
  let inputValue = valueInput.value;
  if (inputValue < 5 && inputValue > 0) {
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }
  return inputValue;
}

const btnAdd = document.querySelector('#generate-board');
btnAdd.addEventListener('click', () => {
  const valueInput = document.querySelector('#board-size');
  if (valueInput.value === '') {
    alert('Board inválido!');
    clearInput();
  }
  const size = validationInput(valueInput);
  if (size > 0 && size <= 50) {
    const pixelBoard = document.querySelector('#pixel-board');
    document.body.removeChild(pixelBoard);
    createPixelBoard(size);
    clearInput();
  }
});

// Requisito 12
// Para esse requisito contei com um help da Estudante Gabriela Feijó.
function generateColorPalette() {
  const color = document.querySelectorAll('.color');
  for (let index = 1; index < color.length; index += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    color[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
generateColorPalette();
