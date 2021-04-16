let creationFirst = document.createElement('div');
let creationPalette = document.querySelector('#color-palette');
creationPalette.appendChild(creationFirst);
for (let index = 0; index < 10; index += 1) {
  let creationFirstTd = document.createElement('td');
  creationFirstTd.className = 'color';
  creationFirst.appendChild(creationFirstTd);
}