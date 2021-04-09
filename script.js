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

showColorSelected();
// evento click para selecionar cor
// esse deve ocorrer dentro de #collor-pallete

// evento click para aplicar cor
// esse deve ocorrer dentro de #pixel board

