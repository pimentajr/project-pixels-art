document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('blue').style.backgroundColor = 'blue';
document.getElementById('yellow').style.backgroundColor = 'yellow';
let pixelBoard = document.querySelector('#pixel-board');

let colorPalette = document.querySelector('#color-palette');

const genetateButton = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');
generateColorPalette();
generatePixelBoard(5);

function generatePixelBoard (size) {
  const totalSize = size * size;
  const borderWidth = (size * 40) + 40;
  pixelBoard.style.width = `${borderWidth}px`
  for (let i = 0 ; i < totalSize ; i += 1){
    const divPixel = document.createElement('div');
    divPixel.classList.add('pixel');
    pixelBoard.appendChild(divPixel);
  }
}

function generateColorPalette(){
  for (let i = 0 ; i < 4 ; i += 1){
    const divColor = document.createElement('div');
    divColor.classList.add('color');
    if (i === 0){
      divColor.style.backgroundColor = 'black';
    }else{
      divColor.style.backgroundColor = generateRandomColor();
    }
    divColor.classList.add(`div${i}`);
    colorPalette.appendChild(divColor);
  }
}
let currentColor = "black";
let itemSel = document.querySelector('.div0');
itemSel.classList.add('selected');

genetateButton.addEventListener('click', function(){

  while (pixelBoard.firstChild){
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
  if(boardSize.value == ''){
    alert("Board inválido!");
  }
  let numBoard = boardSize.value;
  if (numBoard < 5){
    numBoard = 5;
  }else if (numBoard > 50){
    numBoard = 50;
  }

  generatePixelBoard(numBoard);
});

colorPalette.addEventListener('click', function(event) {
  let selectedColor = event.target.style.backgroundColor;
  let selectedDiv = event.target;
  let previousDiv = document.querySelector('.selected');
  previousDiv.classList.remove('selected')
  selectedDiv.classList.add('selected');
  currentColor = selectedColor;
});


pixelBoard.addEventListener('click', function(event){
  let selectedPixel = event.target;
  selectedPixel.style.backgroundColor = currentColor;
  //console.log(selectedPixel);

});

let clearBoard = document.querySelector('#clear-board');

clearBoard.addEventListener('click', function(event){
  let pixelArray = document.querySelectorAll('.pixel');
  for (let i = 0 ; i < pixelArray.length ; i += 1){
    pixelArray[i].style.backgroundColor = "white";
  }

});