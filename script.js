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
  const initialcolor = document.querySelectorAll('.pixel');
  for (let index = 0; index < initialcolor.length; index += 1) {
    initialcolor[index].addEventListener('click', colorblack);
    function colorblack() {
      initialcolor[index].style.backgroundColor = color;
    }
  }
}
paintPixelBoard('black');

function selectColor() {
  const selectedcolor = document.querySelectorAll('.color');
  for (let index = 0; index < selectedcolor.length; index += 1) {
    selectedcolor[index].addEventListener('click', selectedState);
    function selectedState() {
      selectedcolor[0].classList.remove(['selected']);
      selectedcolor[1].classList.remove(['selected']);
      selectedcolor[2].classList.remove(['selected']);
      selectedcolor[3].classList.remove(['selected']);
      selectedcolor[index].classList.add(['selected']);
      selectedcolor[index].style.backgroundColor;
        const initialcolor = document.querySelectorAll('.pixel');
        const finalcolor = document.querySelector('.selected');
        for (let index = 0; index < initialcolor.length; index += 1) {
          initialcolor[index].addEventListener('click', pixelselected);
          function pixelselected() {
            initialcolor[index].style.backgroundColor = finalcolor.style.backgroundColor;
          };
        }
    };
  }
}
selectColor()

  function buttonClear() {
    const button = document.createElement('button');
    const blockButton = document.querySelector('#button');
    blockButton.appendChild(button);
    button.id = 'clear-board';
    button.innerHTML = 'Limpar';
    function clearAllPixels () {
      const pixels = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
      }
    }
    button.addEventListener('click', clearAllPixels);
  }
buttonClear()
