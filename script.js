
// get Color Palette
let colorPalette = document.getElementById('color-palette')
// get Colors
let colors = document.getElementsByClassName('color')
// get Selected Color
let selectedColor = document.querySelector('.selected')
// get Color Board 
let pixelBoard = document.getElementById('pixel-board')

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
  // event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = selectedColorStyle;
  })


