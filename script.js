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
  event.target.className += ' selected';
}
document.getElementById('color-palette').addEventListener('click', changeSelectedClass);

function changeColorPixel(event) {
  let classColor = document.querySelectorAll('.selected')[0].classList[1];
  if (event.target.classList.length !== 1) {
    event.target.classList.remove(event.target.classList[1]);
    event.target.className += ' ' + classColor;
  } else {
    event.target.className += ' ' + classColor;
  }
}
document.getElementById('pixel-board').addEventListener('click', changeColorPixel);
