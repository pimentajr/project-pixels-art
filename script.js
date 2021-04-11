window.onload = function() {

const colorPalette = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.querySelectorAll('.pixel');
    

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

  pixelBoard.addEventListener('click',function(event){
    
    let selected = document.querySelector('.selected');
    let styles = window.getComputedStyle(selected);  
    let colorPixel = styles.getPropertyValue('background-color');
   
    let localPixel = event.target;

    if(localPixel.style.backgroundColor === colorPixel) {
        localPixel.style.backgroundColor = 'white';
    } else localPixel.style.backgroundColor = colorPixel;
  })
}

toPaint();

function createButtonClear(buttonName){

  let buttonClear = document.createElement('button');
  buttonClear.id = 'clear';
  buttonClear.innerText = buttonName;

  let idButtonClear = document.getElementById('button-clear');
  idButtonClear.appendChild(buttonClear);

  buttonClear.addEventListener('click', function(event){
    for(let index = 0; index < pixel.length; index += 1) {
      if(pixel[index].backgroundColor != 'white') {
      pixel[index].style.backgroundColor = 'white';
      }
    }
  })
}

createButtonClear('LIMPAR');

}
