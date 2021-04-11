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
      let paintColor = window.getComputedStyle(selectedColor, null)
        .getPropertyValue('background-color'); // captura a cor selecionada
      pixelToPaint[index].style.backgroundColor = paintColor; // atribui ao pixel a cor desejada
    });
  }
}
paint();
// Cria um botão que ao ser ativado, limpa o quadro

function clear() {
  let pixels = document.querySelectorAll('.pixel'); // captura e armazena todos os pixels do quadro
  let clearButton = document.querySelector('#clear-board'); // captura o botão que irá limpar o quadro
  clearButton.addEventListener('click', function () { // função click e abre o que ela realiza
    for (let index = 0; index < pixels.length; index += 1) { // atribui a todos os pixels capturados atrav;es de um loop
      pixels[index].style.backgroundColor = 'white'; // atribuí a todos a cor white
    }
  });
}
clear();

function removeBoxAndPixelBoard() { // cria o comando que deleta o atual pixel board e seus pixels
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.remove();
}

function createNewBoxAndPixelBoard(n) { // deleta o atual pixel board e seus pixels, e cria um novo com seu tamanho definido por n
  removeBoxAndPixelBoard(); // deleta o atual pixel board e seus pixels
  let newPixelBoard = document.createElement('div'); // cria uma div, nova pixel board
  newPixelBoard.id = 'pixel-board'; // adiciona id
  document.body.appendChild(newPixelBoard); // insere no body
  for (let lines = 0; lines < n; lines += 1) { // cria n linhas
    let newLine = document.createElement('div');
    newLine.className = 'line';
    newPixelBoard.appendChild(newLine); // insere as linhas no novo pixel board
    for (let index = 0; index < n; index += 1) { // cria n pixels
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      newLine.appendChild(pixel); // insere os pixels na linha
    }
  }
  selectColor(); // Reativa as funções no novo Pixel Board
  paint();
  clear();
}
