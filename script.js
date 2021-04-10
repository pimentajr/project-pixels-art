function createDiv(number) {
  for (let index = 0; index < number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(createdDiv);
  }
}
createDiv(25);

const eventTarget = event.target;

function changeSelectedClass(event) {
  document.querySelectorAll('.selected')[0].classList.remove('selected');
  eventTarget.className += ' selected';
}
document.getElementById('color-palette').addEventListener('click', changeSelectedClass);

function changeColorPixel(event) {
  const classColor = document.querySelectorAll('.selected')[0].classList[1];
  if (event.target.classList.length !== 1) {
    eventTarget.classList.remove(event.target.classList[1]);
    eventTarget.className += ' ' + classColor;
  } else {
    eventTarget.className += ' ' + classColor;
  }
}
document.getElementById('pixel-board').addEventListener('click', changeColorPixel);
