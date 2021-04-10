// Create table on load
window.onload = function() {
  tableSize = document.getElementById('board-size').value = 5;
  valueCheck(5)
  tableSize = document.getElementById('board-size').value = '';
}

// get Color Palette
let colorPalette = document.getElementById('color-palette')
// get Colors
let colors = document.getElementsByClassName('color')
// get Selected Color
let selectedColor = document.querySelector('.selected')
// get Color Board 
let pixelBoard = document.getElementById('pixel-board')
// get Pixels
let pixels = document.getElementsByClassName('pixel')

// Value Check
// if (tableSize > 50) {
//   tableSize = 50;
// }
// if (tableSize < 5) {
//   tableSize = 5;
// }
function valueCheck(tableSize) {
  tableSize = document.getElementById('board-size').value;
//   if (!tableSize) {
//     alert('Board inválido!')
//  } else {
//    createTable(tableSize)
//   }
  switch (true) {
    case !tableSize:
      alert('Board inválido!');
      break;
    case tableSize < 5:
      tableSize = 5;
      createTable(tableSize);
      break;
    case tableSize > 50:
      tableSize = 50;
      createTable(tableSize);
      break;
    default:
      createTable(tableSize);
      break;
  }
}
// Create Table
function createTable(tableSize) {
  let tableBody = document.querySelector('tbody')
  pixelBoard.removeChild(tableBody);
  let newTBody = document.createElement('tbody');
  pixelBoard.appendChild(newTBody);
  for (let i = 0; i < tableSize; i +=1) {
    let newRow = document.createElement('tr')
    newTBody.appendChild(newRow);
    let tableRow = document.getElementsByTagName('tr');
    for (let j = 0; j < tableSize; j +=1) {
      let newPixel = document.createElement('td')
      tableRow[i].appendChild(newPixel);
      newPixel.className = 'pixel';
    }
  }
}
// Color Select
colorPalette.addEventListener('click', function(event){
  for (key of colors) {
    key.classList.remove('selected');
  }
  event.target.classList.add('selected')
})

// Color Drop
pixelBoard.addEventListener('click', function(event){
  selectedColor = document.querySelector('.selected');
  let selectedColorStyle = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  event.target.style.backgroundColor = selectedColorStyle;
  })

// Clear Board
  function clearBoard() {
    for (let key of pixels) {
      key.style.backgroundColor = 'white';
    }
  }