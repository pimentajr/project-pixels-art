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

const input = document.createElement('input');
const buttonVqv = document.createElement('button');
input.id = 'board-size';
buttonVqv.id = 'generate-board';
buttonVqv.innerText = 'VQV';
storeButtom.appendChild(input);
storeButtom.appendChild(buttonVqv);
input.type = 'number';
input.min = 1;
input.max = 50;
input.value = 5;

const divColor1 = document.createElement('div');
divColor1.classList.add('selected');
divColor1.classList.add('color');
divColor1.style.backgroundColor = 'black';
secaoSelecionaCor.appendChild(divColor1);

const divColor2 = document.createElement('div');
divColor2.classList.add('color');
divColor2.style.backgroundColor = randomColors();
secaoSelecionaCor.appendChild(divColor2);

const divColor3 = document.createElement('div');
divColor3.classList.add('color');
divColor3.style.backgroundColor = randomColors();
secaoSelecionaCor.appendChild(divColor3);

const divColor4 = document.createElement('div');
divColor4.classList.add('color');
divColor4.style.backgroundColor = randomColors();
secaoSelecionaCor.appendChild(divColor4);

const contaneinerCores = document.createElement('div');
contaneinerCores.id = 'pixel-board';
textBody.appendChild(contaneinerCores);

input.value = 5
SelecionaNum()
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

function SelecionaNum() {
  if (input.value === ''){
    return;
  }

  if (input.value <= 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }

  for (let indice = 0; indice < input.value; indice += 1) {
    const createLinha = document.createElement('tr');

    for (let index = 0; index < input.value; index += 1) {
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
}

buttonVqv.addEventListener('click', () => {
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    limpaTd();
    SelecionaNum();
    CleanPaletas();
  }
});

function limpaTd() {
  contaneinerCores.innerHTML = '';
}

function randomColors(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}
