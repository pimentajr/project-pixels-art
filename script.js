

function createTableColor(colorPixel) {
  for (let index = 0; index < colorPixel; index += 1) {
    let colorPallete = document.getElementById('color-palette');
    let tableColor = document.createElement('div');
    colorPallete.appendChild(tableColor);
    tableColor.className = 'color';
  }  
}

  createTableColor(4);

function boxColor() {
  let colorPicker = document.getElementsByClassName('color');
  colorPicker[0].style.backgroundColor = 'black';
  colorPicker[1].style.backgroundColor = '#edf5e1';
  colorPicker[2].style.backgroundColor = '#5cdb95';
  colorPicker[3].style.backgroundColor = '#379663'; 
}

  boxColor();

function selectedColor() {
    let initialColor = document.getElementsByClassName('color');
    initialColor[0].classList.add('selected');
   };
 
  selectedColor();

function pixelBoard(boardSize) {
  for(let index = 0; index < boardSize; index += 1) {
    let pBoard = document.getElementById('pixel-board');
    let pLine = document.createElement('div');
    pBoard.appendChild(pLine).className = 'line';
    for (let index1 = 0; index1 < boardSize; index1 += 1) {
    let pixel = document.createElement('div');
    pLine.appendChild(pixel).className = 'pixel';    
    }
  }
}

  pixelBoard(5);



function pickColor() {
  const colorPicked = document.getElementById('color-palette');
  const classChange = document.querySelectorAll('.color');
  colorPicked.addEventListener('click', (event) => {
    let targetElement = event.target;    
    for (let index = 0; index < classChange.length; index += 1){         
      classChange[index].classList.remove('selected');
      if (targetElement.className === 'color') {
        targetElement.classList.add('selected');
      }    
    }    
  });
}
  pickColor();

function pixelBoardPaint() {
  const colorPicked = document.getElementById('pixel-board');
  colorPicked.addEventListener('click', (event) => {
    const pixelBox = event.target;
    const selectedColor = document.querySelector('.selected');      
      if (pixelBox.className === 'pixel') {
        pixelBox.style.backgroundColor = selectedColor.style.backgroundColor;
      }         
    });
  }

  pixelBoardPaint();

  function clearBoard() {
    const clearButton = document.getElementById('clear-board');
    const catchPixel = document.querySelectorAll('.pixel');
    clearButton.addEventListener('click', () => {
    for (index = 0; index < catchPixel.length; index += 1) {     
        catchPixel[index].style.backgroundColor = 'white';
      }
    });
  }

  clearBoard();


  
  
