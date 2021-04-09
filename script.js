// Desafio 2
function createDiv(tag, id) {
  const createP = document.createElement(tag);
  createP.id = id;
  document.body.appendChild(createP);
}

createDiv('section', 'color-palette');

function createDiv1(tag, classN) {
  const CreatDiv = document.createElement(tag);
  CreatDiv.className = classN;
  const Father = document.querySelector('#color-palette');
  Father.appendChild(CreatDiv);
}
createDiv1('div', 'black color');
createDiv1('div', 'red color');
createDiv1('div', 'green color');
createDiv1('div', 'blue color');

function toCheck () {

}