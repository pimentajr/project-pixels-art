const textBody = document.querySelector('body');
const title = document.createElement('h1');
title.innerText = 'Paleta de Cores';
title.id = 'title';
textBody.appendChild(title);

const secaoSelecionaCor = document.createElement('section');
secaoSelecionaCor.id = 'color-palette';
textBody.appendChild(secaoSelecionaCor);

const divColor1 = document.createElement('div');
divColor1.classList.add('selected');
divColor1.classList.add('color');
divColor1.style.backgroundColor = 'black';
secaoSelecionaCor.appendChild(divColor1);

const divColor2 = document.createElement('div');
divColor2.classList.add('color');
divColor2.style.backgroundColor = 'pink';
secaoSelecionaCor.appendChild(divColor2);

const divColor3 = document.createElement('div');
divColor3.classList.add('color');
divColor3.style.backgroundColor = 'blue';
secaoSelecionaCor.appendChild(divColor3);

const divColor4 = document.createElement('div');
divColor4.classList.add('color');
divColor4.style.backgroundColor = 'magenta';
secaoSelecionaCor.appendChild(divColor4);

const contaneinerCores = document.createElement('div');
contaneinerCores.id = 'pixel-board';
textBody.appendChild(contaneinerCores);

for (let indice = 1; indice <= 5; indice += 1) {
  const createLinha = document.createElement('tr');

  for (let index = 1; index <= 5; index += 1) {
    const celulas = document.createElement('td');
    celulas.classList = 'pixel';
    createLinha.appendChild(celulas);
  }
  contaneinerCores.appendChild(createLinha);
}
