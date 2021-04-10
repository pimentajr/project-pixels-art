window.onload = function carregar() {
  document.getElementById('black').classList.add('selected');
};
function selecionaClasse(event) {
  const atribuiClasse = document.querySelectorAll('.selected');
  for (let index = 0; index < atribuiClasse.length; index += 1) {
    atribuiClasse[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', selecionaClasse);
