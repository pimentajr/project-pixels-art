function colorPallet(color) {
  const spanPallet = document.createElement('span');
  const spanBlock = document.querySelector('#color-palette');
  spanPallet.className = 'color';
  spanBlock.appendChild(spanPallet);
  spanPallet.style.backgroundColor = color;
  const firstColor = document.querySelector('.color');
  firstColor.classList.add(['selected']);
}
colorPallet('black');
colorPallet('red');
colorPallet('green');
colorPallet('blue');

function pixelBoard(lines) {
  const divPixel = document.createElement('div');
  const divBlock = document.querySelector(lines);
  divPixel.className = 'pixel';
  divBlock.appendChild(divPixel);
  divPixel.style.backgroundColor = 'white';
}
for (let index = 0; index < 5; index += 1) {
  pixelBoard('#lines_1');
  pixelBoard('#lines_2');
  pixelBoard('#lines_3');
  pixelBoard('#lines_4');
  pixelBoard('#lines_5');
}

function paintPixelBoard(color) {
  let resultcolor;
  const allcolors = document.querySelectorAll('.pixel');
  for (let index = 0; index < allcolors.length; index += 1) {
    resultcolor = function colorblack() {
      allcolors[index].style.backgroundColor = color;
    };
    allcolors[index].addEventListener('click', resultcolor);
  }
}
paintPixelBoard('black');

function selectedState(event) {
  const currentSelectedColor = document.querySelector('.selected');
  currentSelectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectColor() {
  const selectedcolor = document.querySelectorAll('.color');
  for (let index = 0; index < selectedcolor.length; index += 1) {
    selectedcolor[index].addEventListener('click', selectedState);
  }
}
selectColor();

function colorPaintPixel() {
  const initialcolor = document.querySelectorAll('.pixel');
  for (let index = 0; index < initialcolor.length; index += 1) {
    initialcolor[index].addEventListener('click', (event) => {
      const currentColorSelected = document.querySelector('.selected');
      const windowAtt = window.getComputedStyle(currentColorSelected);
      const result = event;
      result.target.style.backgroundColor = windowAtt.backgroundColor;
    });
  }
}
colorPaintPixel();

function buttonClear() {
  const button = document.createElement('button');
  const blockButton = document.querySelector('#button');
  blockButton.appendChild(button);
  button.id = 'clear-board';
  button.innerHTML = 'Limpar';
  function clearAllPixels() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }
  button.addEventListener('click', clearAllPixels);
}
buttonClear();
