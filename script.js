//função selecionar cor
function selecColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1){
  cores [i].addEventListener('click', selecColor);
}