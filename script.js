// Título
const title = document.getElementById('title');
title.style = 'font-family: New Tegomin';

// Criando paleta de cores

const colorsPalette = document.createElement('section');
colorsPalette.id = 'color-palette';
document.body.appendChild(colorsPalette);

function colorPalette() {
  for (let index = 0; index < 4; index += 1) {
    const colors = document.createElement('div');
    colors.classList.add('color');
    colorsPalette.appendChild(colors);
  }
  const firstColor = document.querySelector('.color');
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
}
colorPalette();

// Criando função de cores aleatórias - Para resolução deste requisito(12) eu peguei como referência o pull request da Gabriela Feijó.

function randomColor() {
  const randomColors = document.querySelectorAll('.color');
  for (let index = 1; index < randomColors.length; index += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    randomColors[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
randomColor();

const sectionButtons = document.createElement('section');
document.body.appendChild(sectionButtons);

const button = document.createElement('button');
button.innerText = 'Limpar';
button.id = 'clear-board';
sectionButtons.appendChild(button);

function changeColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const removeColor = pixels[index];
    removeColor.style.backgroundColor = 'white';
  }
}
button.addEventListener('click', changeColor);

// Criando input e botão

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
sectionButtons.appendChild(input);

const button2 = document.createElement('button');
button2.innerText = 'VQV';
button2.id = 'generate-board';
sectionButtons.appendChild(button2);

// Criando tabela

const divPixels = document.createElement('div');
divPixels.id = 'pixel-board';
document.body.appendChild(divPixels);

for (let index = 1; index <= 5; index += 1) {
  const tableLines = document.createElement('tr');
  divPixels.appendChild(tableLines);

  for (let indice = 1; indice <= 5; indice += 1) {
    const columnLines = document.createElement('td');
    columnLines.classList = 'pixel';
    columnLines.addEventListener('click', (event) => {
      if (document.querySelector('.selected')) {
        const { target } = event;
        const color = document.querySelector('.selected').style.backgroundColor;
        target.style.backgroundColor = color;
      }
    });
    tableLines.appendChild(columnLines);
  }

  // Criando botão

  const firstEventButton = document.getElementById('color-palette');

  firstEventButton.addEventListener('click', (event) => {
    if (document.querySelector('.selected') !== null) {
      (document.querySelector('.selected').classList.remove('selected'));
    }
    event.target.classList.add('selected');
  });
}
