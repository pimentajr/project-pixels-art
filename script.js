const addTitle = document.createElement('h1');
addTitle.id = 'title';
addTitle.innerHTML = 'Paleta de Cores';
document.body.appendChild(addTitle);

function createPaletteDiv() {
  const addColorPalette = document.createElement('div');
  addColorPalette.id = 'color-palette';
  document.body.appendChild(addColorPalette);
  addColorPalette.style.backgroundColor = 'rgb(30, 116, 119)';
}
createPaletteDiv();

function createBoxesDiv() {
  const selectPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDivs = document.createElement('div');
    selectPalette.appendChild(createDivs);
    createDivs.classList.add('color');
  }
  
  const getColors = document.querySelectorAll('.color')
  getColors[0].style.backgroundColor = 'black';
  getColors[1].style.backgroundColor = 'rgb(189 172 216)';
  getColors[2].style.backgroundColor = 'violet';
  getColors[3].style.backgroundColor = 'purple';
 
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}
createBoxesDiv();
