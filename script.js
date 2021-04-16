let creationFirst = document.createElement('div');
let creationPalette = document.querySelector('#color-palette');
creationPalette.appendChild(creationFirst);
for (let index = 0; index < 10; index += 1) {
  let creationFirstTd = document.createElement('td');
  creationFirstTd.className = 'color';
  creationFirst.appendChild(creationFirstTd);
}
document.querySelector('.color').className += ' selected';

let counter = 5;

for (let index = 0; index < counter; index += 1) {
  let createTr = document.createElement('div');
  createTr.className = 'pixeld';
  let theTable = document.querySelector('#pixel-board');
  theTable.appendChild(createTr);
  for (let count = 0; count < counter; count += 1) {
    let createSecondTd = document.createElement('td');
    createSecondTd.className = 'pixel';
    createTr.appendChild(createSecondTd);
  }
}