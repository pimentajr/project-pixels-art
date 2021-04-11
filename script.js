window.onload = function() {

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

//ref:https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle:

function toPaint() {

  let pixelBoard = document.getElementById('pixel-board');

  pixelBoard.addEventListener('click',function(event){
    
    let selected = document.querySelector('.selected');
    let styles = window.getComputedStyle(selected);  
    let colorPixel = styles.getPropertyValue('background-color');

    let pixel = document.querySelector('.pixel');
    console.log(pixel);
    
    let localPixel = event.target;

    if(localPixel.style.backgroundColor === colorPixel) {
        localPixel.style.backgroundColor = 'white';
    } else localPixel.style.backgroundColor = colorPixel;
    
  })
}

toPaint();

}
