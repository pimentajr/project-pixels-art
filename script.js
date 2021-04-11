// global varible
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function createColorPalette() {
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.marginRight = '5px';
    colorPalette.appendChild(div);
  }
}
createColorPalette();

function createPixels() {
  const pixels = 25;
  for (let i = 0; i < pixels; i += 1) {
    const divPixels = document.createElement('div');
    divPixels.className = 'pixel';
    divPixels.style.marginRight = '3px';
    pixelBoard.appendChild(divPixels);
  }
}
createPixels();

window.onload = function selecteDivs() {
  const div = document.querySelector('.color');
  div.classList.add('selected');
};

function switchSelectedColor() {
  const colorDiv = document.querySelectorAll('.color');
  for (let i = 0; i < colorDiv.length; i += 1) {
    colorDiv[i].addEventListener('click', function() {
      if (!colorDiv[i].classList.contains('selected')) {
        for (let j = 0; j < colorDiv.length; j += 1) {
          colorDiv[j].classList.remove('selected');
        }
        colorDiv[i].classList.add('selected');
      }
    });
  }
}
switchSelectedColor();

function setColor() {
  const pixelsArr = pixelBoard.childNodes;
  for (let i = 0; i < pixelsArr.length; i += 1) {
    pixelsArr[i].addEventListener('click', function() {
      const pixels = pixelsArr[i];
      const element = document.querySelector('.selected');
      const propBckGrd = window.getComputedStyle(element, null).getPropertyValue('background-color');
      pixels.style.backgroundColor = propBckGrd;
    });
  }
}
setColor();

function createClrBtn() {
  const body = document.querySelector('body');
  const clearBtn = document.createElement('button');
  body.appendChild(clearBtn);
  const divColorPalette = clearBtn.previousElementSibling.previousElementSibling;
  body.insertBefore(clearBtn, divColorPalette);
  clearBtn.id = 'clear-board';
  clearBtn.innerHTML = 'Limpar';
  clearBtn.style.marginLeft = '48%';
  clearBtn.style.marginTop = '30px';
  clearBtn.style.padding = '10px';
  clearBtn.style.width = '100px';
}
createClrBtn();

function clearPxlBoard() {
  const clrBtn = document.querySelector('#clear-board');
  clrBtn.addEventListener('click', function() {
    const pxl = pixelBoard.childNodes;
    for (let i = 0; i < pxl.length; i += 1) {
      pxl[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
clearPxlBoard();
