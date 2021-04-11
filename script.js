const titulo = document.getElementById('title');
titulo.innerText = 'Paleta de Cores';

const divColors = document.querySelectorAll('.color');
const colorsValue = divColors.id;
divColors[0].style.backgroundColor = 'black';

function paleteColors() {
  for (let index = 1; index < divColors.length; index += 1) {
    const colorsValue = divColors[index].id;
    const colorsValueApp = '#' + (Math.random().toString(16) + '000000').substring(2,8);
    divColors[index].style.backgroundColor = colorsValueApp; 
  }
}
//subString link : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
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
const secondColor = document.getElementById('box2');
const thirdColor = document.getElementById('box3');
const fourthColor = document.getElementById('box4');

firstColor.addEventListener('click', clickElement);
secondColor.addEventListener('click', clickElement);
thirdColor.addEventListener('click', clickElement);
fourthColor.addEventListener('click', clickElement);

function colorPixel() {
  pixelBoard.addEventListener('click', function (event) {
    const pixelColor = document.querySelector('.selected').style.backgroundColor;
    const localPaint = event.target;
    localPaint.style.backgroundColor = pixelColor;
    if (localPaint.className === 'pixel') {
      localPaint.style.backgroundColor = pixelColor;
    } else {
      localPaint.style.backgroundColor = 'white';
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

function changeGrid () {
  const infoGrid = document.getElementById('board-size');
  const newGrid = document.getElementById('generate-board');
  newGrid.addEventListener('click', function () {
    if(infoGrid.value === ''){
      alert('Board inválido!');
    } else if (infoGrid.value < 5) {
      infoGrid.value = 5;
    } else if (infoGrid.value > 50) {
      infoGrid.value = 50
    }
    pixelBoard.style.backgroundColor = 'white';
    pixelBoard.innerHTML = '';
    createBoardPixel(pixelBoard, infoGrid.value, infoGrid.value)    
  });
}
changeGrid();

