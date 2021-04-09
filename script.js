// Desafio 1
function creatH1(tag, id, Name) {
  const create = document.createElement(tag);
  create.id = id;
  create.innerText = Name;
  document.body.appendChild(create);
}
creatH1('h1', 'title', 'Paleta De Cores!');
