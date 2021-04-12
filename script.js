const colorsArray = ['black', 'red', 'blue', 'yellow'];

function createColors(colors) {
  const sectionBoxColors = document.querySelector('#color-palette');
  for (let index = 0; index < colors.length; index += 1) {
    const createBoxColors = document.createElement('div');
    sectionBoxColors.appendChild(createBoxColors);
    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = colorsArray[index];
  }
}
createColors(colorsArray);

const table = document.querySelector('#pixel-board');
function createTable(numberRows, unityNumbers) {
  for (let index = 0; index < numberRows; index += 1) {
    const createLine = document.createElement('tr');
    createLine.className = 'row';
    table.appendChild(createLine);

    for (let count = 0; count < unityNumbers; count += 1) {
      const createUnityPixel = document.createElement('th');
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

const addOrRemove = document.querySelectorAll('.color');
for (let index = 0; index < addOrRemove.length; index += 1) {
  const item = addOrRemove[index];
  item.addEventListener('click', function (e) {
    const selected = document.querySelector('.selected');
    if (item.className === 'color') {
      e.target.classList.add('selected');
      selected.classList.remove('selected');
    }
  });
};

/*
function changeColorPixel() {
  let colorSelect = document.querySelector('.selected').style.backgroundColor;
  const selectPixel = document.querySelector('.pixel')

  selectPixel.addEventListener('click', function(e) {
    if (selectPixel.style.backgroundColor !== colorSelect) {
      e.target.style.backgroundColor = colorSelect;
    }
  })
}
changeColorPixel(); */