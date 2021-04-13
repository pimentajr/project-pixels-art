const colorPalette = document.getElementById('color-palette');
const arrColors = ['black', 'blue', 'magenta', 'yellow'];
let pixelSquare = document.getElementById('pixel-board');
let pixelSquareSize = 5;

for (let index = 0; index < arrColors.length; index += 1) {
  const colorPixel = document.createElement('div');
  colorPixel.className = 'color';
  colorPixel.classList.add(arrColors[index]);
  colorPixel.style.backgroundColor = arrColors[index];
  colorPixel.style.margin = '5px';
  colorPixel.style.border = 'solid 1px black';
  colorPalette.appendChild(colorPixel);
}

createBoard(pixelSquareSize);

function createBoard(size) {
  for (let index = 0; index < size; index += 1) {   
    pixelSquare.style.display = 'table';
    const pixelRow = document.createElement('div');
    
    for (let index1 = 0; index1 < size; index1 += 1) {      
      const pixel = document.createElement('div');
      pixelRow.style.display = 'table-row';
      pixel.className = 'pixel';

      pixel.style.width = '40px';
      pixel.style.height = '40px';

      pixel.style.display = 'table-cell';

      pixel.style.border = 'solid 1px black';

      pixelRow.appendChild(pixel);        
    }

    pixelSquare.appendChild(pixelRow);
  }
}


let colorBlack = document.querySelector('.color.black');
colorBlack.classList.add('selected');

let colors = document.getElementById('color-palette').children;

let colorState = 0;

function selectColor(event) {

  if (colorState === 0) {
    for (let index = 0; index < colors.length; index += 1) {
      event.target.classList.add('selected');

      for (let index1 = 0; index1 < colors.length; index1 += 1) {
        if (colors[index1] !== event.target) {
          colors[index1].classList.remove('selected');
        }
      }
    }
  }
}

for(let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

let pixelCollection = document.querySelectorAll('.pixel');

function matchColor(event) {
  let selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
};

for (let index = 0; index < pixelCollection.length; index +=1) {
  pixelCollection[index].addEventListener('click', matchColor);
}

let clearButton = document.querySelector('#clear-board');

function colorWhite() {
  for (let index = 0; index < pixelCollection.length; index +=1) {
    pixelCollection[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', colorWhite);

let setBoardSizeButton = document.querySelector('#generate-board');

let inputBoardSize = document.querySelector('#board-size');

setBoardSizeButton.addEventListener('click', function () {
  let newSize = parseInt(inputBoardSize.value);
  if (!newSize) {
    alert('Board inválido!');
  } else {

    let squareLength = pixelSquare.children.length;
    for (let index = 0; index < squareLength; index += 1) {
      pixelSquare.removeChild(pixelSquare.firstChild);
  
    }
    
    createBoard(newSize);
  
    pixelCollection = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelCollection.length; index +=1) {
      pixelCollection[index].style.backgroundColor = 'white';
    }

    for (let index = 0; index < pixelCollection.length; index +=1) {
      pixelCollection[index].addEventListener('click', matchColor)
    }

    clearButton.addEventListener('click', colorWhite);
  }

})
