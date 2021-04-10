function colorPallet() {
  const paletteColor = document.getElementsByClassName('color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = 'red';
  paletteColor[2].style.backgroundColor = 'blue';
  paletteColor[3].style.backgroundColor = 'green';
  paletteColor[0].classList.add('selected');
}
colorPallet();

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
