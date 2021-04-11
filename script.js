const getcolorPalette = document.getElementById('color-palette');
const getpixelBoard = document.getElementById('pixel-board');
const getColors = document.querySelectorAll('.color');
const getclearBoard = document.getElementById('clear-board');
const getboardSize = document.getElementById('board-size');
const getgenerateBoard = document.getElementById('generate-board');

function setSelect(event) {
  getColors.forEach((elem) => {
    elem.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

getcolorPalette.addEventListener('click', setSelect);

function paintPixel(event) {
  const ev = event.target;
  getColors.forEach((elem) => {
    if (elem.classList[2] === 'selected') {
      const color = elem.classList[1];
      if(color === 'black'){
        ev.style.backgroundColor = color;
      } else {
        ev.style.backgroundColor = elem.style.backgroundColor;
      }
    }
  });
}

getpixelBoard.addEventListener('click', paintPixel);

function btnClear() {
  const getPixel = document.querySelectorAll('.pixel');
  getPixel.forEach((elem) => {
    elem.style.removeProperty('background-color');
  });
}

getclearBoard.addEventListener('click', btnClear);

function creatLine(qtd) {
  for (let index = 0; index < qtd; index += 1) {
    const creatLn = document.createElement('div');
    creatLn.classList.add('line');
    for(let index = 0; index < qtd; index += 1) {
      creatPx(creatLn);
    }
    getpixelBoard.appendChild(creatLn);
  }
}

creatLine(5);

function creatPx(elem) {
  const creatPxl = document.createElement('div');
  creatPxl.classList.add('pixel');
  elem.appendChild(creatPxl);
}

function remove() {
  getpixelBoard.innerHTML = '';
}

function addPx() {
  let nValue = getboardSize.value;
  if (nValue === '') {
    alert('Board inválido!');
  } if (getboardSize.value < 5) { 
    nValue = 5;
  } else if (nValue > 50) { 
    nValue = 50;
  } 
  remove();
  creatLine(nValue);
}

getgenerateBoard.addEventListener('click', addPx);

function randColor() {
  return Math.floor(Math.random(255) * 255);
}

getColors.forEach((elem) => {
  if (elem.classList[1] !== 'black') {
    elem.style.backgroundColor = 'rgb('+ randColor()+ ',' +randColor()+ ',' +randColor() +')';
  }
});
