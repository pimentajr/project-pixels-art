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
  const divBtns = document.createElement('div');
  body.appendChild(clearBtn);
  const divColorPalette = clearBtn.previousElementSibling.previousElementSibling;
  body.insertBefore(divBtns, divColorPalette);
  divBtns.id = 'main-btns'
  clearBtn.id = 'clear-board';
  clearBtn.innerHTML = 'Limpar';
  divBtns.appendChild(clearBtn);
  clearBtn.style.marginLeft = '39%';
  clearBtn.style.marginTop = '30px';
  clearBtn.style.padding = '10px';
  clearBtn.style.width = '100px';
}
createClrBtn();

function clearPxlBoard() {
  const clrBtn = document.querySelector('#clear-board');
  const pxl = pixelBoard.childNodes;
  clrBtn.addEventListener('click', function() {
    for (let i = 0; i < pxl.length; i += 1) {
      pxl[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
clearPxlBoard();

function createInput() {
  const input = document.createElement('input');
  const divBtns = document.querySelector('#main-btns');
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  input.max = '50';
  input.style.padding = '10px';
  input.style.marginLeft = '250px';
  divBtns.appendChild(input);
}
createInput();

function createResizeBtn() {
  const resizeBtn = document.createElement('button');
  const divBtns = document.querySelector('#main-btns');
  resizeBtn.style.width = '100px';
  resizeBtn.id = 'generate-board';
  resizeBtn.style.padding = '10px';
  resizeBtn.style.marginLeft = '5px';
  resizeBtn.innerHTML = 'VQV';
  divBtns.appendChild(resizeBtn);
}
createResizeBtn();

function resizePxls() {
  const resizeBtn = document.querySelector('#generate-board');
  const inputResize = document.querySelector('#board-size');
  const pxlBoard = pixelBoard.childNodes;

  resizeBtn.addEventListener('click', function() {
    const pxlValue = inputResize.value;
    if (inputResize.value.length === 0) {
      alert('Board inválido!');
    }
    for (let i = 0; i < pxlBoard.length; i += 1) {
      pxlBoard[i].style.width = pxlValue + 'px';
      pxlBoard[i].style.height = pxlValue + 'px';
      pxlBoard[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
resizePxls();

function gerateRandomColor() {
  const o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

window.onload = function() {
  const colors = colorPalette.childNodes;
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = gerateRandomColor();
  }
}
