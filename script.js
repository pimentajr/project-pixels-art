const colorsArray = ['black', 'red', 'blue', 'yellow'];

function createColors(colors) {
  const sectionBoxColors = document.querySelector('#color-palette');
  for (let index = 0; index < colors.length; index += 1) {
    let createBoxColors = document.createElement('div');
    sectionBoxColors.appendChild(createBoxColors);
    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = colorsArray[index];
  }
}
createColors(colorsArray);

const table = document.querySelector('#pixel-board');
function createTable(numberRows, unityNumbers) {
  for (let index = 0; index < numberRows; index += 1) {
    let createLine = document.createElement('tr');
    createLine.className = 'row';
    table.appendChild(createLine);

    for (let index = 0; index < unityNumbers; index += 1) {
      let createUnityPixel = document.createElement('th');
      createUnityPixel.className = 'pixel';
      createUnityPixel.style.backgroundColor = 'white';
      createLine.appendChild(createUnityPixel);
    }
  }
}
createTable(5, 5);

function inicitalColor() {
  document.querySelector('#color-palette').firstElementChild.className = 'color selected';
}
inicitalColor();

function addOrRemoveClass() {
  const addOrRemove = document.querySelectorAll('.color');

  for (let index = 0; index < addOrRemove.length; index += 1) {
    let item = addOrRemove[index];

    item.addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      if (item.className === 'color') {
        event.target.classList.add('selected');
        selected.classList.remove('selected');
      }
    });
  };
};
addOrRemoveClass();