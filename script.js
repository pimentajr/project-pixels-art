
let listOfColors = ['lightsalmon', 'lightgreen', 'lightskyblue', 'khaki'];
let colors = document.querySelectorAll('.color');
let colorsPalette = document.querySelector('#collor-palette');

function createBox(arrayColors) {
  for (let index = 0; index < arrayColors.length; index += 1) {
    let box = document.createElement('div');
    box.className = 'color';
    box.style.background = listOfColors[index];
    colorsPalette.appendChild(box)
    }
}

createBox(listOfColors)


// function callBox(box) {
//   for (let index = 0; index < colors.length; index += 1) {
//     color = index
//     let box = defineColor(color)


//   }

// }

// function defineColor(color) {
//   let index = color
//   color.style.background = listOfColors[index]
  

// }
