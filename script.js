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

let getWhitePixel = document.getElementsByClassName('pixel');
for (let i = 0; i < getWhitePixel.length; i += 1) {
 let eachPixel = getWhitePixel[i]
  eachPixel.style.backgroundColor = 'white';
}


//8
let getPixelBoard = document.querySelector('#pixel-board')
getPixelBoard.addEventListener('click', function(event) {
  let getSelected = document.querySelector('.selected');
    if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = getSelected.style.backgroundColor;
  } 
})

//9
let getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', function() {
  let getWhitePixel = document.getElementsByClassName('pixel');
for (let i = 0; i < getWhitePixel.length; i += 1) {
 let eachPixel = getWhitePixel[i]
  eachPixel.style.backgroundColor = 'white';
}
  if (eachPixel.style.backgroundColor !== 'white') {
    eachPixel.style.backgroundColor = 'white';
  } 
})
