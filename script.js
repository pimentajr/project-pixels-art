window.onload = function() {
  

let pixelBoard = document.getElementById('pixel-board');
let colors = document.querySelectorAll('.color');
let black = document.getElementById('black');
let rose = document.getElementById('rose');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');

function selectColor () {
  for(let index = 0; index < colors.length; index +=1) {
    let block = colors[index].id;
    
    if(block === 'black') {
      colors[index].classList.add('selected');
    } else {

    }
  }
}
selectColor();

function changeSelectColor(){

  let colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', function(event) {

    for(let index = 0; index < colors.length; index +=1) {
      let block = colors[index].className;
      if(block.indexOf('selected') >= 0) {
        colors[index].classList.remove('selected');
      }
    } event.target.classList.add('selected');

  })
}

changeSelectColor();


}
