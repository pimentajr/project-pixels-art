window.onload = function() {
  let getColors = document.getElementsByClassName('color');
  getColors[0].style.backgroundColor = 'black'
  for (let index = 1; index < getColors.length; index += 1) {
    getColors[index].style.backgroundColor = getRandomColors(arrayColors);
  }
  
} 

let arrayColors = ['aqua', 'blue', 'fuchsia', 'gray', 'green','lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow'];

function getRandomColors (colors) {
  randomColor = colors[Math.floor((Math.random()*colors.length))];
  return randomColor;
} 
