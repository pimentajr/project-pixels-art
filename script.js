const colors = document.querySelectorAll('.color'); // atribuindo array com as classes color
const eventPixels = document.querySelector('#pixel-board');

// seleciona cor
function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// pinta a tabela
eventPixels.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const evTarget = event.target;
    evTarget.style.backgroundColor = selectedColor;
  }
});
