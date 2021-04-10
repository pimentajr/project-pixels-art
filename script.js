const colorPalete = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
function changesToBlack() {
  if (colors[0].style.backgroundColor !== 'black') {
    colors[0].style.backgroundColor = 'black';
  }
}
changesToBlack();

function defineInitialSelectedColor() {
  colors[0].className = 'color selected';
}
defineInitialSelectedColor();


function colorChange(event) {
  const selecionedColor = document.querySelector('#color-palette').children;
  for (let index = 0; index < selecionedColor.length; index += 1) {
    selecionedColor[index].setAttribute('class', 'color');
  }
  event.target.className += ' selected';
}
colorPalete.addEventListener('click', colorChange);