// Título
const title = document.getElementById('title');
title.style = 'font-family: New Tegomin';

// Adiciona background-color em todos os quadrados da paleta de cores

const blackSquare = document.getElementById('black');
blackSquare.style = 'background-color: black';

const redSquare = document.getElementById('red');
redSquare.style = 'background-color: red';

const orangeSquare = document.getElementById('orange');
orangeSquare.style = 'background-color: orange';

const yellowSquare = document.getElementById('yellow');
yellowSquare.style = 'background-color: yellow';

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
    columnLines.addEventListener('click', function createEvents(eventos) {
      if (document.querySelector('.selected')) {
        const color = document.querySelector('.selected').style.backgroundColor;
        eventos.target.style.backgroundColor = color;
      }
    });
  tableLines.appendChild(columnLines);
  }

// Criando botão

const firstEventButton = document.getElementById('color-palette');

firstEventButton.addEventListener('click', function createButton1(event1) {
  if (document.querySelector('.selected') !== null) {
    (document.querySelector('.selected').classList.remove('selected'));
  }
  event1.target.classList.add('selected');
});
}
