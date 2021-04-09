// Desafio 1
function creatH1(tag, id, Name) {
  const create = document.createElement(tag);
  create.id = id;
  create.innerText = Name;
  document.body.appendChild(create);
}
creatH1('h1', 'title', 'Paleta de Cores');

// Desafio 2
function createPalet(tag, id, classN) {
  const createP = document.createElement(tag);
  createP.id = id;
  createP.className = classN;
  createP.style.backgroundColor = classN;
  document.body.appendChild(createP);
}

createPalet('div', 'color-palette', 'red');
