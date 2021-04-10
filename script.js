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
// Pinta com a cor selecionada
function paint() {
  let pixelToPaint = document.querySelectorAll('.pixel'); // Captura e armazena todos os pixels do quadro
  for (let index = 0; index < pixelToPaint.length; index += 1) { // adiciona o evento a todos os pixels através de um loop
    pixelToPaint[index].addEventListener('click', function () { // função click e abre o que ela realiza
      let selectedColor = document.querySelector('.selected'); // captura a div com a cor selecionada
      let paintColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color'); // captura a cor selecionada
      pixelToPaint[index].style.backgroundColor = paintColor; // atribui ao pixel a cor desejada
    });
  }
}
paint();
// Cria um botão que ao ser ativado, limpa o quadro

function clear() {
  let pixels = document.querySelectorAll('.pixel'); // captura e armazena todos os pixels do quadro
  let clearButton = document.querySelector('#clear-board'); //captura o botão que irá limpar o quadro
  clearButton.addEventListener('click', function(){
    for (let index = 0; index < pixels.length; index += 1) { 
      pixels[index].style.backgroundColor = 'white'
    }
  })
}
clear();
