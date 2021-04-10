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

document.getElementById('color-palette').addEventListener('click', function (event) {
    document.querySelectorAll('.selected')[0].classList.remove('selected');
    event.target.className += ' selected';
})
