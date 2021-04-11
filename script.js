const titulo = document.getElementById('title');
titulo.innerText = 'Paleta de Cores';

const divColors = document.querySelectorAll('.color');

function paleteColors() {
  for (let index = 0; index < divColors.length; index += 1) {
    const colorsValue = divColors[index].id;
    divColors[index].style.backgroundColor = colorsValue;
  }
}
paleteColors();

function createBoardPixel(parent, line, column) {
  for (let indexLine = 1; indexLine <= line; indexLine += 1) {
    const pixelTr = document.createElement('tr');
    for (let indexColumn = 1; indexColumn <= column; indexColumn += 1) {
      const pixelTd = document.createElement('td');
      pixelTd.className = 'pixel';
      pixelTr.appendChild(pixelTd);
    }
    parent.appendChild(pixelTr);
  }
}

const pixelBoard = document.querySelector('#pixel-board');
createBoardPixel(pixelBoard, 5, 5);

function clickElement(event) {
  const elementClick = document.querySelector('.selected');
  elementClick.classList.remove('selected');
  event.target.classList.add('selected');
}

const firstColor = document.getElementById('black');
const secondColor = document.getElementById('blue');
const thirdColor = document.getElementById('red');
const fourthColor = document.getElementById('green');

firstColor.addEventListener('click', clickElement);
secondColor.addEventListener('click', clickElement);
thirdColor.addEventListener('click', clickElement);
fourthColor.addEventListener('click', clickElement);

function colorPixel() {
  pixelBoard.addEventListener('click', function (event) {
    const pixelColor = document.querySelector('.selected').style.backgroundColor;
    const localPaint = event.target;
    localPaint.style.backgroundColor = pixelColor;
    if (localPaint === 'pixel') {
      localPaint.style.backgroundColor = pixelColor;
    }
  });
}
colorPixel();

function cleanGrid() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    const pixelSquare = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelSquare.length; index += 1) {
      pixelSquare[index].style.backgroundColor = 'white';
    }
  });
}
cleanGrid();

// function changeGrid () {
//   const infoGrid = document.getElementById('board-size');
//   const newGrid = document.getElementById('generate-board');
//   newGrid.addEventListener('click', function () {
//     if(infoGrid === ''){
//       alert('Board inválido!');
//     } else if (infoGrid < 5) {
//       infoGrid = 5;
//     } else if (infoGrid > 50) {
//       infoGrid = 50
//     }
//     pixelBoard.style.backgroundColor = 'white';
//     createBoardPixel(pixelBoard, infoGrid, infoGrid)    
//   });
// }
// changeGrid();