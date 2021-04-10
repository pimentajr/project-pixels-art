// Create table on load
window.onload = function() {
createTable()
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

// Create table
// tableSize > 50 || tableSize < 5 || 
function createTable(tableSize) {
  tableSize = document.getElementById('board-size').value;
  if (tableSize === '') {
    alert('Board inválido!')
 } else {
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