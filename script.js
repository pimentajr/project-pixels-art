// criar o quadro com de pixels
function createBoxAndPixelBoard () {
  let pixelBoard = document.createElement('div') // cria uma div será o pixel board e armazenará os pixels
  pixelBoard.className = 'pixel-board' // adiciona classe
  document.body.appendChild(pixelBoard); // insere no body
  pixelBoard.style.width = 5*40 + 'px'; // define a largura do quadro
  pixelBoard.style.height = 5*40 + 'px'; // define a altura do quadro
  pixelBoard.style.marginTop = '10px'; // define a margem top
  for(let index = 0; index < 5*5; index += 1) { //executa o comando abaixo multiplas vezes
    let pixel = document.createElement('div'); // cria uma div, e cada div criada será cada pixels
    pixel.className = 'pixel'; // adiciona classe
    pixelBoard.appendChild(pixel); // insere no pixel board
  }
}
createBoxAndPixelBoard ()

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

function removeBoxAndPixelBoard () { //cria o comando que deleta o atual pixel board e seus pixels
  let pixelBoard = document.querySelector('.pixel-board')
  pixelBoard.remove()
}

function createNewBoxAndPixelBoard (n) { // delete o atual pixel board e seus pixels, e cria um novo com seu tamanho definido por n
  removeBoxAndPixelBoard ()
  let newPixelBoard = document.createElement('div')
  newPixelBoard.className = 'pixel-board'
  document.body.appendChild(newPixelBoard);
  newPixelBoard.style.width = n*40 + 'px'
  newPixelBoard.style.height = n*40 + 'px'
  newPixelBoard.style.marginTop = '10px'
  for(let index = 0; index < n*n; index += 1){
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    newPixelBoard.appendChild(pixel)
  }
  selectColor() //Reativa as funções no novo Pixel Board
  paint()
  clear()
}