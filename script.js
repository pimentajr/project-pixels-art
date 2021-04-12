const textBody = document.querySelector('body');
const title = document.createElement('h1');
title.innerText = 'Paleta de Cores';
title.id = 'title';
textBody.appendChild(title);

const secaoSelecionaCor = document.createElement('section');
secaoSelecionaCor.id = 'color-palette';
textBody.appendChild(secaoSelecionaCor);

const storeButtom = document.createElement('section');
textBody.appendChild(storeButtom);

const button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
storeButtom.appendChild(button);

const divColor1 = document.createElement('div');
divColor1.classList.add('selected');
divColor1.classList.add('color');
divColor1.style.backgroundColor = 'black';
secaoSelecionaCor.appendChild(divColor1);

const divColor2 = document.createElement('div');
divColor2.classList.add('color');
divColor2.style.backgroundColor = 'yellow';
secaoSelecionaCor.appendChild(divColor2);

const divColor3 = document.createElement('div');
divColor3.classList.add('color');
divColor3.style.backgroundColor = 'goldenrod';
secaoSelecionaCor.appendChild(divColor3);

const divColor4 = document.createElement('div');
divColor4.classList.add('color');
divColor4.style.backgroundColor = 'darkred';
secaoSelecionaCor.appendChild(divColor4);

const contaneinerCores = document.createElement('div');
contaneinerCores.id = 'pixel-board';
textBody.appendChild(contaneinerCores);

for (let indice = 1; indice <= 5; indice += 1) {
  const createLinha = document.createElement('tr');

  for (let index = 1; index <= 5; index += 1) {
    const celulas = document.createElement('td');
    celulas.classList = 'pixel';
    celulas.addEventListener('click', (events) => {
      if (document.querySelector('.selected') !== null) {
        const color = document.querySelector('.selected').style.backgroundColor;
        events.target.style.backgroundColor = color;
      }
    });
    createLinha.appendChild(celulas);
  }
  contaneinerCores.appendChild(createLinha);
}

secaoSelecionaCor.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});

function CleanPaletas() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const clean = pixels[index];
    clean.style.backgroundColor = 'white';
  }
}

button.addEventListener('click', (event) => {
  CleanPaletas();
});
