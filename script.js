// transformando os quadrados em cores
// const colors = document.querySelectorAll('.color');
const color1 = document.querySelectorAll('.color')[0];
const color2 = document.querySelectorAll('.color')[1];
const color3 = document.querySelectorAll('.color')[2];
const color4 = document.querySelectorAll('.color')[3];
color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'purple';
color3.style.backgroundColor = 'gold';
color4.style.backgroundColor = 'red';

//  selecionando a cor da paleta

function selectedSwitch(event) {
  document.querySelectorAll('.selected')[0].classList.remove('selected');
  const eventTarget = event.target;
  eventTarget.className += ' selected';
}
document.getElementById('color-palette').addEventListener('click', selectedSwitch);

// criando botao de limpar o board
const button = document.createElement('button');

button.addEventListener('click', () => {
  const pixelsBoard = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsBoard.length; index += 1) {
      const pixel = pixelsBoard[index];
      pixel.style.backgroundColor = 'white';
}

/* const colorSelected = document.querySelectorAll('.selected')[0];
const colorFill = document.querySelectorAll('.pixel');

colorSelected.addEventListener('click', colors);

function fillingPixels() {
colorFill.style.backgroundColor = colorSelected.style.backgroundColor;
}
colorSelected.addEventListener('click', fillingPixels); */
