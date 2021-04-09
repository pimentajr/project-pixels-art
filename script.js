// Desafio 1
function creatH1(tag, id, Name) {
  const create = document.createElement(tag);
  create.id = id;
  create.innerText = Name;
  document.body.appendChild(create);
}
creatH1('h1', 'title', 'Paleta de Cores');

// Desafio 2
function createDiv(tag, id) {
  const createP = document.createElement(tag);
  createP.id = id;
  document.body.appendChild(createP);
}

createDiv('div', 'color-palette');

function createDiv1 (tag, classN) {
  const CreatDiv = document.createElement(tag);
  CreatDiv.className = classN;
  const Father = document.querySelector('#color-palette');
  Father.appendChild(CreatDiv);
}
createDiv1('div', 'red');
createDiv1('div', 'green');
createDiv1('div', 'black');
createDiv1('div', 'blue');

