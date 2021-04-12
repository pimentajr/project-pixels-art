function createDiv(number) {
  for (let index = 0; index < number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(createdDiv);
  }
}
createDiv(25);

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
    eventTarget.className += ' ' + classColor;
  } else {
    eventTarget.className += ' ' + classColor;
  }
}
document.getElementById('pixel-board').addEventListener('click', changeColorPixel);

const targetButton = document.getElementById('clear-board');


targetButton.addEventListener("click",function() {
  const targetPixelClass = document.querySelectorAll('.pixel');
  for (let index = 0, index < 25; index += 1) {
    targetPixelClass[index].classList.remove(targetPixelClass[1]);
  }
})