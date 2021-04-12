const pixelRow = document.getElementById('pixel-board');

function colorPallet() {
  const paletteColor = document.getElementsByClassName('color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = 'red';
  paletteColor[2].style.backgroundColor = 'blue';
  paletteColor[3].style.backgroundColor = 'green';
  paletteColor[0].classList.add('selected');
}
colorPallet();

function createSquare(setNumber) {
  for (let index = 0; index < setNumber; index += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    pixelRow.appendChild(row);
    for (let indexPix = 0; indexPix < setNumber; indexPix += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      row.appendChild(pixel);
    }
  }
}
createSquare(5);

function buttonInput() {
  const myButton = document.getElementById('generate-board');
  myButton.addEventListener('click', () => {
    const myValue = document.getElementById('board-size');
    pixelRow.innerHTML = '';
    if (myValue.value <= 0) {
      alert('Board inválido!');
    } else if (myValue.value < 5) {
      myValue.value = 5;
    } else if (myValue.value > 50) {
      myValue.value = 50;
    }
    createSquare(myValue.value);
  });
}
buttonInput();

function clickSelectedColor() {
  const colorSelected = document.getElementById('color-palette');
  colorSelected.addEventListener('click', (event) => {
    const myEvent = event.target;
    const divColor = document.querySelectorAll('.color');
    for (let index = 0; index < divColor.length; index += 1) {
      divColor[index].classList.remove('selected');
      if (myEvent.className === 'color') {
        myEvent.classList.add('selected');
      }
    }
  });
}
clickSelectedColor();

function paintPixel() {
  const bodyTableColor = document.getElementById('pixel-board');
  bodyTableColor.addEventListener('click', (e) => {
    const myNewEvent = e.target;
    const newDivs = document.querySelector('.selected');
    console.log(myNewEvent);
    if (myNewEvent.className === 'pixel') {
      myNewEvent.style.backgroundColor = newDivs.style.backgroundColor;
    }
  });
}
paintPixel();

function buttonCleanSquare() {
  const bodyTableColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < bodyTableColor.length; index += 1) {
    bodyTableColor[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
const button = document.getElementById('clear-board');
button.addEventListener('click', buttonCleanSquare);
