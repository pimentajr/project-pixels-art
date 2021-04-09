//7
let getColors = document.querySelector('#color-palette');
getColors.addEventListener('click', function(event) {
  let getSelected = document.querySelector('.selected');
  if (getSelected.classList[0] === 'color') {
    getSelected.className = 'color';
    event.target.className = 'color selected';
  } 
})
//set colors
let getBlack = document.getElementById('black').style.backgroundColor = 'black';
let getYellow = document.getElementById('yellow').style.backgroundColor = 'yellow';
let getGreen = document.getElementById('green').style.backgroundColor = 'green';
let getBlue = document.getElementById('blue').style.backgroundColor = 'blue';


//8
let getPixelBoard = document.querySelector('#pixel-board')
getPixelBoard.addEventListener('click', function(event) {
  let getSelected = document.querySelector('.selected');
    if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = getSelected.style.backgroundColor;
  } 
})
