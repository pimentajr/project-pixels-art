const colors = document.querySelectorAll('.color'); // atribuindo array com as classes color

// seleciona cor
function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// pinta a tabela
