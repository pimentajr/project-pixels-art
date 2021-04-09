window.onload = function () {
  const numberOfBlock = 5;
  const section = document.querySelector('#pixel-board');
  const selected = document.querySelector('.selected');
  const color = document.getElementsByClassName('color');

  function addColorPalette() {
    color[0].style.backgroundColor = 'black';
    color[0].classList.add('selected');
    color[1].style.backgroundColor = 'green';
    color[2].style.backgroundColor = 'red';
    color[3].style.backgroundColor = 'blue';
  }
  addColorPalette();

  function blockPixel(size) {
    for (let index = 0; index < size; index += 1) {
      const pixelColumn = document.createElement('div');
      section.appendChild(pixelColumn);
      for (let indexOfLine = 0; indexOfLine < size; indexOfLine += 1) {
        const pixelLine = document.createElement('div');
        pixelLine.className = 'pixel';
        pixelColumn.appendChild(pixelLine);
      }
    }
  }
  blockPixel(numberOfBlock);

  function clickEventColor() {
    const sectionColor = document.querySelector('#color-palette');
    sectionColor.addEventListener('click', function (event) {
      for (let index = 0; index < color.length; index += 1) {
        color[index].classList.remove('selected');
        if (event.target.className === 'color') {
          event.target.classList.add('selected');
        }
      }
    });
  }
  clickEventColor();

  function addColorPixel() {
    const pixelSection = document.querySelector('#pixel-board');
    const classOff = document.querySelector('.off');
    pixelSection.addEventListener('click', function (event) {
      for (let index = 0; index < color.length; index += 1) {
        if (color[index].className === 'color selected') {
          event.target.style.backgroundColor = color[index].style.backgroundColor;
        } if (classOff.style.backgroundColor === color[index].style.backgroundColor) {
          classOff.style.backgroundColor = '';
        }
      }
    });
  }
  addColorPixel();

  function clearButton() {
    const getButton = document.querySelector('#clear-board');
    getButton.addEventListener('click', function () {
      const pixelClear = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixelClear.length; index += 1) {
        pixelClear[index].style.backgroundColor = 'white';
      }
    });
  }
  clearButton();
};
