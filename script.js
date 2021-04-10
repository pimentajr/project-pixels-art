window.onload = function() {
  let select = document.querySelector('.color')
  select.className = 'color selected'
}

function colorPallete(){
  let allPallete = document.querySelectorAll('.color')
  for (let c = 0; c < allPallete.length; c += 1){
      allPallete[c].className = 'color';
    }
}

function selectColor(){
  let cor = event.target.id
  let color = document.getElementById(cor)
  colorPallete()
  color.className = 'color selected'
}

function colorPaint(){
  let linha = event.target.id
  return linha
}

var pixelPannel = document.getElementById('pixel-board')
pixelPannel.addEventListener('click', () => {
  var linha = colorPaint()
  var cor = document.querySelector('.selected').style.backgroundColor
  document.getElementById(linha).style.backgroundColor = cor
})

var buttonClear = document.getElementById('clear-board')
buttonClear.addEventListener('click', () => {
  clear()
})

function clear() {
  var squares = document.getElementsByClassName('pixel')
  for (let square = 0; square < squares.length; square += 1){
    squares[square].style.backgroundColor = 'white'
  }
}
