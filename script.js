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

function createpx(px) {
  for (let i = 0; i < px; i += 1) {
    const divWrap = document.createElement('div');
    pixelBoard.appendChild(divWrap);
    for (let j = 0; j < px; j += 1) {
      const divpx = document.createElement('div');
      divpx.className = 'pixel';
      divpx.style.marginRight = '3px';
      divWrap.appendChild(divpx);
    }
  }
}
createpx(5);

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
    pixelBoard.addEventListener('click', function(e) {
      const element = document.querySelector('.selected');
      const propBckGrd = window.getComputedStyle(element, null).getPropertyValue('background-color');
      if (e.target.classList[0] === 'pixel') {
        e.target.style.backgroundColor = propBckGrd;
      } 
    });
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
  clrBtn.addEventListener('click', () => {
    const boardPxl = document.querySelectorAll('.pixel');
    for (let i = 0; i < boardPxl.length; i += 1) {
      boardPxl[i].style.backgroundColor = 'rgb(255, 255, 255)';
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

function removePxls() {
  const pixelChild = pixelBoard;
  for (let i = 0; i < pixelChild.childElementCount;) {
    pixelChild.removeChild(pixelChild.childNodes[0]);
  }
}

document.querySelector('#generate-board').addEventListener('click', () => {
  const input = document.querySelector('#board-size');
  input.value < 5 ? input.value = 5 : input.value;
  input.value > 50 ? input.value = 50 : input.value;
  console.log(input.value);
  if (input.value.length === 0) {
    alert('Board inválido!');
  } else {
    removePxls();
    createpx(input.value);
  }
})


// function gerateRandomColor() {
//   const o = Math.round, r = Math.random, s = 255;
//   return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }

// window.onload = function() {
//   const colors = colorPalette.childNodes;
//   for (let i = 1; i < colors.length; i += 1) {
//     colors[i].style.backgroundColor = gerateRandomColor();
//   }
// }
