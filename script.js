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

let selectedColorPosition = document.querySelectorAll('selected')[0];

selectedColorPosition.addEventListener('click'. function() {
  selectedColorPosition.classList.remove('selected');
  event.target.className = 'selected';
})