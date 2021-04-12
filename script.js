function setInitialColor() {
  const element = document.querySelector('.black');
  element.classList.add('selected');
}

setInitialColor();

const element = document.querySelector('#color-palette');

function addOrRemoveClass(event) {
  const targetElement = event.target;
  const getClass = document.getElementsByClassName('selected');

  for (let index = 0; index < getClass.length; index += 1) {
    getClass[index].classList.remove('selected');
  }
  targetElement.classList.add('selected');
}

element.addEventListener('click', addOrRemoveClass);

const selectColors = document.querySelector('#pixel-board');

function paintPixels(event) {
  const targetElement = event.target;
  const getClass = document.getElementsByClassName('selected')[0];
  const attColor = getComputedStyle(getClass).backgroundColor;
  targetElement.style.backgroundColor = attColor;
}

selectColors.addEventListener('click', paintPixels);

function clearPixel() {
  const button = document.querySelector('#clear-board');
  
  button.addEventListener('click', function() {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelBoard.length; index +=1) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  });
}

clearPixel();
