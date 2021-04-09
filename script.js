const textBody = document.querySelector('body');
const title = document.createElement('h1');
title.innerText = 'Paleta de Cores';
title.id = 'title';
textBody.appendChild(title);

const secaoSelecionaCor = document.createElement('section');
secaoSelecionaCor.id = 'color-palette';
textBody.appendChild(secaoSelecionaCor);

const divColor1 = document.createElement('div');
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
