let black = document.querySelector('#black').style.backgroundColor = 'black';
let orange = document.querySelector('#orange').style.backgroundColor = 'orangered';
let green = document.querySelector('#green').style.backgroundColor = 'green';
let purple = document.querySelector('#purple').style.backgroundColor = 'purple';

const listColorSelected = document.querySelectorAll('.color');
const colorSelect = document.querySelector('.selected');

function selectColor(){
  for(let i = 0; i < listColorSelected.length; i += 1){
    const clickColor = listColorSelected[i];

    clickColor.addEventListener('click', function(event){
      if(clickColor === event.target){
        clickColor.classList.add('selected');
      }
      else{
        clickColor.classList.remove('selected');
      }
    });
  }
}
selectColor();
