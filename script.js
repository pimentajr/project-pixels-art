// função para mostrar a cor selecionada
function showColorSelected() {
let getColorsPallete = document.querySelector('#color-pallete')

getColorsPallete.addEventListener('click', function(event) {
  if (event.target.style.border === 'black solid 1px' ) {
    event.target.style.border = 'blue solid 2px';
  } else {
    event.target.style.border = 'black solid 1px';
  }
  console.log(event.target.style.border)
})
}

// adiciona fundo branco para pixel da paintBoard
function addWhiteToBoard() {
  let paintBoardContainer = document.querySelector('#pixel-board');
  paintBoardContainer.style.backgroundColor = 'white';
}

addWhiteToBoard();

// adiciona tag selected p/ cor preta ao iniciair a página
function addSelectedToBlack() {
  let countSelectClass = document.getElementsByClassName('selected');
  let getBlackColor = document.querySelector('.black');
  if (countSelectClass.length === 0) {
    getBlackColor.classList.add('selected');
  }
}

addSelectedToBlack();

// evento click para aplicar cor - ocorrer dentro de #pixel-board
function applySelectedColor() {
  let getPaintTable = document.querySelector('#pixel-board');
  let getSelectedColor = document.querySelector('.selected');
  let compStyles = window.getComputedStyle(getSelectedColor);

  getPaintTable.addEventListener('click', function(event) {
    event.target.style.backgroundColor = compStyles.getPropertyValue('background-color');
  });
}

applySelectedColor();


// remove a classe selected de um determinado elemento e aplica em outro
function removeSelectedClass() {
  let countSelectClass = document.getElementsByClassName('selected')
  if (countSelectClass.length !== 0) {
    for (let index = 0; index < countSelectClass.length; index += 1) {
      countSelectClass[index].classList.remove('selected');
    }
  }
}



// ao clicar em uma nova cor:
// remover class selected do array da palheta
