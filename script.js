const pixelBoardLocation = document.getElementById('pixel-board');

function createDiv(number) {
  for (let index = 0; index < number * number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    pixelBoardLocation.appendChild(createdDiv);
    pixelBoardLocation.style.width = (number * 52) + 'px';
  }
}
createDiv(5);

function removeDivPixel() {
  while (pixelBoardLocation.lastChild) {
    pixelBoardLocation.lastChild.remove();
  }
}

function removeAndAddDivPixel(count) {
  removeDivPixel();
  createDiv(count); 
}

function changeSelectedClass(event) {
  document.querySelectorAll('.selected')[0].classList.remove('selected');
  const eventTarget = event.target;
  eventTarget.className += ' selected';
}
document.getElementById('color-palette').addEventListener('click', changeSelectedClass);

function changeColorPixel(event) {
  const eventTarget = event.target;
  const classColor = document.querySelectorAll('.selected')[0].classList[1];
  if (event.target.classList.length !== 1) {
    eventTarget.classList.remove(event.target.classList[1]);
    eventTarget.classList.add(classColor);
  } else {
    eventTarget.classList.add(classColor);
  }
}
document.getElementById('pixel-board').addEventListener('click', changeColorPixel);

function clearPixel() {
  const quantidadeDePixel = document.querySelectorAll('.pixel').length;
  for (let contador = 0; contador < quantidadeDePixel; contador += 1) {
    const selector = document.querySelectorAll('.pixel')[contador];
    selector.classList.remove(selector.classList[1]);
  }
}
document.getElementById('clear-board').addEventListener('click', clearPixel);

function resizePixels() {
  const inputValue = document.getElementById('board-size').value;
  if (inputValue >= 5 && inputValue <= 50) {
    removeAndAddDivPixel(inputValue);
  } else {
    alert('Board inválido!');
  }
}
document.getElementById('generate-board').addEventListener('click', resizePixels); 
