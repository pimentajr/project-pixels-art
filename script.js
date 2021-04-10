const getBody = document.body;
const makeTable = document.createElement('table');
getBody.appendChild(makeTable);
makeTable.id = 'pixel-board';
makeTable.className = 'center table';
const numberLines = 5;

for (let index = 0; index < numberLines; index += 1) {
  const makeTr = document.createElement('tr');
  makeTable.appendChild(makeTr);
  makeTr.className = 'center';
  for (let jndex = 0; jndex < numberLines; jndex += 1) {
    const makeTd = document.createElement('td');
    makeTr.appendChild(makeTd);
    makeTd.className = 'pixel branco';
  }
}

function initBlack() {
  const divBlack = document.querySelector('.preto');
  divBlack.classList.add('selected');
}

initBlack();

function trocarSelected(event) {
  const paletaCores = document.querySelectorAll('.selected');
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', trocarSelected);

// npm run lint
// npm run lint:styles
