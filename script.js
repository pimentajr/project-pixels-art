// Seleciona a cor desejada
function selectColor() {
  let colorToSelect = document.querySelectorAll('.color');// captura a palleta de cores
  for (let index = 0; index < colorToSelect.length; index += 1) { // adiciona o evento a todas as cores através de um loop
    colorToSelect[index].addEventListener('click', function () { // função click e abre o que ela realiza
      let currentColor = document.querySelector('.selected');// captura a cor atual e armazena
      currentColor.classList.remove('selected');// remove a classe selected da cor atual
      colorToSelect[index].classList.add('selected');// adiciona a nova cor selecionada a classe selected
    });
  }
}
selectColor();