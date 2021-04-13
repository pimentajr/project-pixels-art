// Variables
const colorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
const colorSelected = document.getElementsByClassName('color selected');
const pixelBoard = document.getElementById('pixel-board');
// const pixelGet = document.getElementsByClassName('pixel selected');

window.onload = colors[0].classList.add('selected');

// Functions

// function getColor( {target} ) {
//   console.log(target.classList)
// }

function removeClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

function setClassColor({ target }) {
  removeClass();
  if (!target.classList.contains('selected')) {
    target.classList.add('selected');
  }
}

function setColor(e) {
  e.target.classList.add('selected');
  if (e.target.style.backgroundColor !== undefined) {
    e.target.style.backgroundColor = colorSelected[0].style.backgroundColor;
  }
}

pixelBoard.addEventListener('click', setColor);
colorPalette.addEventListener('click', setClassColor);

for (let index = 0; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = colors[index].id;
}

(function createPixel() {
  for (let index = 0; index < 5; index += 1) {
    const createDivPixelRow = document.createElement('tr');
    pixelBoard.appendChild(createDivPixelRow);
    createDivPixelRow.classList.add('pixel-row');
    for (let j = 0; j < 5; j += 1) {
      const createDivPixelColum = document.createElement('td');
      createDivPixelRow.appendChild(createDivPixelColum);
      createDivPixelColum.classList.add('pixel', 'white');
    }
  }
}());
