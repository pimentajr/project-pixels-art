const frame = document.querySelector('#pixel-board');
function createPixels() {
  for (let lines = 0; lines < 5; lines += 1) {
    let box = document.createElement('div');
    frame.appendChild(box);
    for (let index = 0; index < 5; index += 1) {
      box = document.createElement('div');
      box.classList.add('pixel');
      frame.appendChild(box);
      box.style.backgroundColor = 'white';
      box.style.display = 'inline-block';
      box.style.height = '40px';
      box.style.width = '40px';
      box.style.border = 'solid 1px black';
    }
  }
}
window.onload = createPixels;

const elementColorBlack = document.querySelector('#color-palette').firstElementChild;
elementColorBlack.classList.add('selected');

const color = document.querySelectorAll('.color');
const colorPalette = document.querySelector('#color-palette');

// Requisito 7
function changeSelection(event) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', changeSelection);

// Requisito 8
/*
* Para a solucionar esse requisito, consultei a Pull Request de Islene Gomes.
* link: https://github.com/tryber/sd-011-project-pixels-art/pull/146/
*/
function paintPixels(event) {
  const colorClassSelected = document.querySelector('.selected');
  const colorCurrent = getComputedStyle(colorClassSelected).backgroundColor; // A função getComputedStyle retorna todos as propriedades do CSS que foram usadas para renderizar um elemento na tela.
  event.target.style.backgroundColor = colorCurrent;
}
frame.addEventListener('click', paintPixels);
