// Create table on load
window.onload = function() {
  tableSize = document.getElementById('board-size').value = 5;
  valueCheck(5);
  tableSize = document.getElementById('board-size').value = '';
  generateColors();
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
// all colors (length148)
const allColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

// Generate Colors
function generateColors() {
  for (i = 1; i < colors.length; i += 1)
  colors[i].style.backgroundColor = allColors[Math.ceil(Math.random()*148)]
}

// Check Value 
function valueCheck(tableSize) {
  tableSize = document.getElementById('board-size').value;
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

// Select Color
colorPalette.addEventListener('click', function(event){
  for (key of colors) {
    key.classList.remove('selected');
  }
  event.target.classList.add('selected')
})

// Drop Color
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

  // console.log(allColors[Math.ceil(Math.random()*148)])
  // document.body.style.backgroundColor = allColors[Math.ceil(Math.random()*148)]