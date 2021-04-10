/* window.onload = function() {
    document.querySelector('.black').className += ' selectd';
}
*/

function createDiv(number) {
  for (let index = 0; index < number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(createdDiv);
  }
}
createDiv(25);

const colorbox = document.getElementById('color-palette');
const selectedColorPosition = document.querySelectorAll('selected');

function eventClick(event) {
    selectedColorPosition.classList.remove('selected');
    event.target.className += ' selected';
  }

colorbox.addEventListener('click', eventClick);