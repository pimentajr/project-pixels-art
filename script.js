window.onload = function start() {
  const boardSection = document.getElementById('pixel-board');
  const colorPalette = document.getElementById('color-palette');
  const btnRest = document.getElementById('clear-board');
  let btnResize = document.getElementById('generate-board');

  // Cria o quadro com os quadrados brancos;
  for (let index = 0; index < 5; index += 1) {
    const everyPixelRow = document.createElement('div');
    everyPixelRow.setAttribute('class', 'pixelRow');
    boardSection.appendChild(everyPixelRow);
    for (let index = 0; index < 5; index += 1) {
      const everyPixel = document.createElement('div');
      everyPixel.setAttribute('class', 'pixel');
      everyPixelRow.appendChild(everyPixel);
    }
  }
  // muda a classe do elemento colorido clickado para selected.
  colorPalette.addEventListener('click', (event) => {
    const allDivsColorPallete = document.getElementById('color-palette').children;
    for (let index = 0; index < allDivsColorPallete.length; index += 1) {
      allDivsColorPallete[index].setAttribute('class', 'color');
    }
    event.target.className += ' selected';
  });


  //Pinta o pixel!
  boardSection.addEventListener('click', (event) => {
    let colorSelected = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
    event.target.style.backgroundColor = colorSelected;
  });


  //Limpa o pixel!
  btnRest.addEventListener('click', function() {
    const AllDivsPixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < AllDivsPixels.length; index += 1) {
      AllDivsPixels[index].style.backgroundColor = 'white';
    }
  });

  // aumenta ou diminui o board chamando a funçao abaixo.
  btnResize.addEventListener('click', function(){
    let numberRows = eval(document.getElementById('board-size').value);
    if (numberRows === undefined) {
      return alert('Board inválido!');
    } else if (numberRows < 5) {
      boardResize(5);
    } else if (numberRows > 50) {
      boardResize(50);
    } else {
      boardResize(numberRows);
    }
  });

  
};


//Resize no tabalho da tabela.
const boardSection = document.getElementById('pixel-board');
function boardResize(num) {
  while (boardSection.firstChild) {
    boardSection.removeChild(boardSection.lastChild);
  }
  for (let index = 0; index < num; index += 1) {
    const everyPixelRow = document.createElement('div');
    everyPixelRow.setAttribute('class', 'pixelRow');
    boardSection.appendChild(everyPixelRow);
    for (let index = 0; index < num; index += 1) {
      const everyPixel = document.createElement('div');
      everyPixel.setAttribute('class', 'pixel');
      everyPixelRow.appendChild(everyPixel);
    }
  }
}


//Cores aleatorios nas tres ultima opcoes toda hora que o navegador abre.
let last3Colors = document.getElementsByClassName('color');

for (let n of last3Colors) {
  let newColor = Math.floor(Math.random()*16777215).toString(16);
  if (n.className === 'color'){
    n.style.backgroundColor = "#" + newColor;
  }
}