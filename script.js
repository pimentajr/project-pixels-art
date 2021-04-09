//

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

// evento click para selecionar cor
// esse deve ocorrer dentro de #collor-pallete
// o click precisa atribuir uma cor para alguma variável



// evento click para aplicar cor
// esse deve ocorrer dentro de #pixel-board

function applySelectedColor() {
  let getPaintTable = document.querySelector('#pixel-board');

  getPaintTable.addEventListener('click', function(event) {
    if (event.target.style.backgroundColor === 'black') {
      event.target.classList.remove('black');
    } else {
      event.target.classList.add('black');
    }
    console.log(event.target);
  })
}

applySelectedColor();


function addSelectedToBlack() {
  let countSelectClass = document.getElementsByClassName('selected');
  let getBlackColor = document.querySelector('.black');
  if (countSelectClass.length === 0) {
    getBlackColor.classList.add('select');
  }
}

addSelectedToBlack();



function removeSelectedClass() {
  let countSelectClass = document.getElementsByClassName('selected')
  if (countSelectClass.length !== 0) {
    for (let index = 0; index < countSelectClass.length; index += 1) {
      countSelectClass[index].classList.remove('selected');
    }
  }
}

removeSelectedClass() 


// ao clicar em uma nova cor:
// remover class selected do array da palheta
