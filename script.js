// Objetos HTML
// ex 7.
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');
let board = document.querySelector('#generate-board');
const mainPage = document.getElementById('main');

// Funções
function removeClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}
// Ex 7
function addClass(event) {
  event.target.classList.add('selected');
}

// ex 9
function clearPixel() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

// ex 8 ------ Refazer essa questão sozinho.
function colorPixel(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const color = getComputedStyle(selectedColor).backgroundColor;
  const pixelSelected = event.target;
  pixelSelected.style.backgroundColor = color;
}
// Regras de negocio
for (let item = 0; item < colors.length; item += 1) {
  const eventItem = colors[item];
  eventItem.addEventListener('click', removeClass);
  eventItem.addEventListener('click', addClass);
}


for (let px = 0; px < pixels.length; px += 1) {
  pixels[px].addEventListener('click', colorPixel);
}

limpar.addEventListener('click', clearPixel);

// ex 10
// Função feita a partir da análise do codigo do colega Jonatha Braga
function validationNumber(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50){
    return 50;
  }
}
// Criar uma função que deleta o board.
function deleteByID(id) {
  const tagToDelete = document.getElementById(id);
  const parentNode = tagToDelete.parentNode;
  parentNode.removeChild(tagToDelete);
  return tagToDelete;
}
console.log(deleteByID('pixel-board'));

// Criar uma função que cria um board novo
function boardGenerate(size) {
  let newBoar = document.createElement('table');
  newBoar.id = 'pixel-board';
  for (let lines = 0; lines < size; lines += 1) {
    let line = document.createElement('tr');
    for (let rows = 0; rows < size; rows += 1) {
      let row = document.createElement('td');
      row.className = 'pixel';
      line.appendChild(row);
    }
    newBoar.appendChild(line);
  }
  return newBoar;
}
console.log(boardGenerate(8));
mainPage.appendChild(boardGenerate(8))
// Adicionar aos pixels reação ao click para serem pintados.

// Adicionar a boardGenerate ao DOM com todas os pixels brancos - 
// Criar uma função que adiciona eventos e classes em um element criado
// Criar uma funcção que adciona o codigo no dom
// Criar evento que reage ao click do botão VQV

/* function boardGenerate() {
  const input = document.querySelector('#board-size');
  const table = document.getElementById('pixel-board');
  if (input.value === '') {
    alert('Board inválido!');
    return null;
  }
 
  for (let index = 0; index <  validationNumber(input.value); index += 1) {
    const newTable = document.createElement('tr');
    newTable.setAttribute('id','pixel-board');
    table.appendChild(newTable);
    for (let index2 = 0; index2 < input.length; index2 += 1) {
      const colum = document.createElement('td');
      colum.classList.add('pixel');
      newTable.appendChild(colum);
    }
  }
}

board.addEventListener('click', boardGenerate);
 */
// Voce parou na linha 35 colocando os loops for em funções para poder reutiliza-las na função que irá remodelar o board na tela com as reações e estilizações..............
