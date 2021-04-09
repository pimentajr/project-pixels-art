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

let selectedColorPosition = document.querySelectorAll('selected');

selectedColorPosition.addEventListener('click', function(event) {
  selectedColorPosition[0].classList.remove('selected');
  event.target.className = 'selected';
})