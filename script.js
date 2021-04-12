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

window.onload = function selectedColor() {
  let initialColor = document.getElementsByClassName('color');
  initialColor[0].classList.add('selected');
};

function pickColor() {
  const colorPicked = document.getElementById('color-palette');
  colorPicked.addEventListener('click', (event) => {
    const targetElement = event.target;
    const classChange = document.getElementsByClassName('color');
    for (let index = 0; index < classChange.length; index += 1) {
      classChange[index].classList.remove('selected');
      if (targetElement.className === 'color') {
        classChange[index].classList.add('selected');
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


  
  
