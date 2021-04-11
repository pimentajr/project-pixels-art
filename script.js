// Cria funcao para gerar cores aletórias
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return (color);
}

// Cria funcao que insere cores aleatórias nos últimos quadro de cores
function insertColors() {
  for (let index = 1; index < 4; index += 1) {
    document.querySelectorAll('.color')[index].style.backgroundColor = getRandomColor();
  }
}
insertColors();

// Seleciona a cor desejada
function selectColor() {
  const colorsToSelect = document.querySelectorAll('.color'); // captura a palleta de cores
  for (let index = 0; index < colorsToSelect.length; index += 1) { // adiciona o evento a todas as cores através de um loop
    colorsToSelect[index].addEventListener('click', () => { // função click e abre o que ela realiza
      const currentColor = document.querySelector('.selected');// captura a cor atual e armazena
      currentColor.classList.remove('selected');// remove a classe selected da cor atual
      colorsToSelect[index].classList.add('selected');// adiciona a nova cor selecionada a classe selected
    });
  }
}
selectColor();

// Pinta com a cor selecionada
function paint() {
  const pixelToPaint = document.querySelectorAll('.pixel'); // Captura e armazena todos os pixels do quadro
  for (let index = 0; index < pixelToPaint.length; index += 1) { // adiciona o evento a todos os pixels através de um loop
    pixelToPaint[index].addEventListener('click', () => { // função click e abre o que ela realiza
      const selectedColor = document.querySelector('.selected'); // captura a div com a cor selecionada
      const paintColor = window.getComputedStyle(selectedColor, null)
        .getPropertyValue('background-color'); // captura a cor selecionada através do getComputedStyle
      pixelToPaint[index].style.backgroundColor = paintColor; // atribui ao pixel a cor desejada
    });
  }
}
paint();

// Cria um botão que ao ser ativado, limpa o quadro
function clear() {
  const pixels = document.querySelectorAll('.pixel'); // captura e armazena todos os pixels do quadro
  const clearButton = document.querySelector('#clear-board'); // captura o botão que irá limpar o quadro
  clearButton.addEventListener('click', () => { // função click e abre o que ela realiza
    for (let index = 0; index < pixels.length; index += 1) { // atribui a todos os pixels capturados através de um loop
      pixels[index].style.backgroundColor = 'white'; // atribuí a todos a cor white
    }
  });
}
clear();

function removeBoxAndPixelBoard() { // cria o comando que deleta o atual pixel board e seus pixels
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.remove();
}

function createNewBoxAndPixelBoard(n) { // deleta o atual pixel board e seus pixels, e cria um novo com seu tamanho definido por n
  removeBoxAndPixelBoard(); // deleta o atual pixel board e seus pixels
  const newPixelBoard = document.createElement('div'); // cria uma div, nova pixel board
  newPixelBoard.id = 'pixel-board'; // adiciona id
  document.body.appendChild(newPixelBoard); // insere no body
  for (let lines = 0; lines < n; lines += 1) { // cria n linhas com classe line
    const newLine = document.createElement('div');
    newLine.className = 'line';
    newPixelBoard.appendChild(newLine); // insere as linhas no novo pixel board
    for (let index = 0; index < n; index += 1) { // cria n pixels para para a linha criada
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      newLine.appendChild(pixel); // insere os pixels na linha
    }
  }
  selectColor(); // Reativa as funções no novo Pixel Board
  paint();
  clear();
}

// Cria um botão com input que define o tamanho do quadro de pixels
function boardSize() {
  const vqvButton = document.querySelector('#generate-board'); // captura o botão #VQV
  vqvButton.addEventListener('click', () => { // adiciona função click ao botão
    const n = document.querySelector('#board-size').value; // captura o valor do input
    if (n === '') { // executa uma das operações de acordo com o valor de n
      alert('Board inválido!');
    } else if (n < 5) {
      createNewBoxAndPixelBoard(5);
    } else if (n > 50) {
      createNewBoxAndPixelBoard(50);
    } else {
      createNewBoxAndPixelBoard(n);
    }
  });
}
boardSize();
