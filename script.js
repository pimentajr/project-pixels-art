// CORES DA PALETA

const black = document.getElementsByClassName('color')[0];
black.style.backgroundColor = 'black';

const green = document.getElementsByClassName('color')[1];
black.style.backgroundColor = 'green';

const blue = document.getElementsByClassName('color')[2];
black.style.backgroundColor = 'blue';

const yellow = document.getElementsByClassName('color')[3];
black.style.backgroundColor = 'yellow';

// CRIA TABELA DE PIXELS

const pixelBoard = document.querySelector('#pixel-board');

for (let indexRow = 0; indexRow < 5; indexRow += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (indexColl = 0; indexColl < 5; indexColl += 1) {
        let pixelCell = document.createElement('div');
        pixelLine.appendChild(pixelCell);
        pixelCell.style.backgroundColor = 'white';
    }
}

// ADICIONAR CLASSE

const paletteColors = document.getElementById('color-palette');

function selectColor() {
    paletteColors.addEventListener('click', (event) => {
    const color = document.getElementsByClassName('selected');
    if (event.target.id !== 'color-palette') {
        color.classList.remove('selected');
        event.target.classList.add('selected');
    }
  });
}  

selectColor();
// COLORIR PIXEL
pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').id;
    if (event.target.className === 'pixel') {
        const pixelSelected = event.target;
        pixelSelected.style.backgroundColor = selectedColor;
    }
});

// BOTAO DE LIMPAR

const cleartableButton = document.getElementById('clear-board');

cleartableButton.innerText = 'Limpar';

cleartableButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].backgroundColor = 'white';
  }
});
