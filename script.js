function createDiv1(tag, classN) {
  const CreatDiv = document.createElement(tag);
  CreatDiv.className = classN;
  const Father = document.querySelector('#color-palette');
  Father.appendChild(CreatDiv);
}
createDiv1('div', 'black color');
createDiv1('div', 'red color');
createDiv1('div', 'green color');
createDiv1('div', 'blue color');

function setClassColor() {
  const classColor = document.querySelector('.black');
  classColor.classList.add('selected');
}

setClassColor();

//Desafio 7
function setColorPalette(event) {
  const setColor = document.querySelectorAll('.selected');
  for (let index = 0; index < setColor.length; index += 1) {
    setColor[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', setColorPalette);

//Desafio 8

const Father2 = document.querySelector('#pixel-board');
function colorPixel (event) {
  const actualColor = document.querySelector('.selected');
  const color = getComputedStyle(actualColor).backgroundColor;  
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}
Father2.addEventListener('click',colorPixel)
