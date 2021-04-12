/*
Projeto Pixels Art
@author Fernando Lasmar
*/

document.body.style.backgroundColor = 'rgb(162,170,183)';

// seleciona cor
const colors = document.querySelectorAll('.color'); // atribuindo array com as classes color
function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// pinta a tabela
const eventPixels = document.querySelector('#pixel-board');
eventPixels.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const evTarget = event.target;
    evTarget.style.backgroundColor = selectedColor;
  }
});

// resetar a tabela
const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

const input = document.querySelector('#board-size');
const generateTable = document.querySelector('#gerenate-board');
