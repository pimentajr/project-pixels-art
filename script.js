function createDiv(number) {
  for (let index = 0; index < number*number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(createdDiv);
    document.getElementById('pixel-board').style.width = (number * 52) + 'px';
  }
}
createDiv(5);

function removeDivPixel() {
    document.getElementById('pixel-board').firstChild.remove();
}

function removeAndAddDivPixel(count) {
  let quantidadeDePixel = document.querySelectorAll('.pixel').length;
  for (let contador2 = 0; contador2 <= quantidadeDePixel; contador2 += 1) {
    removeDivPixel();
  }
  createDiv(count);
}

removeAndAddDivPixel(8);

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
  for (let contador = 0; contador < 25; contador += 1) {
    const selector = document.querySelectorAll('.pixel')[contador];
    selector.classList.remove(selector.classList[1]);
  }
}
document.getElementById('clear-board').addEventListener('click', clearPixel);
