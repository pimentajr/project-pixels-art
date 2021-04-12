//7 
let getColors = document.querySelector('#color-palette');
getColors.addEventListener('click', function (event) {
  let getSelected = document.querySelector('.selected');
  if (getSelected.classList[0] === 'color') {
    getSelected.className = 'color';
    event.target.className = 'color selected';
  }
});
//set colors
document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('yellow').style.backgroundColor = 'yellow';
document.getElementById('green').style.backgroundColor = 'green';
document.getElementById('blue').style.backgroundColor = 'blue';

let getWhitePixel = document.getElementsByClassName('pixel');
for (let i = 0; i < getWhitePixel.length; i += 1) {
  let eachPixel = getWhitePixel[i];
  eachPixel.style.backgroundColor = 'white';
}

//8
let getPixelBoard = document.querySelector('#pixel-board');
getPixelBoard.addEventListener('click', function (event) {
  let getSelected = document.querySelector('.selected');
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = getSelected.style.backgroundColor;
  }
});

//9
let getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', function () {
  let getWhitePixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < getWhitePixel.length; i += 1) {
    let eachPixel = getWhitePixel[i];
    eachPixel.style.backgroundColor = 'white';
  }
});

//Refatorando requisito 4
//function createNewTable(colum, line) {
  //for (let i = 0; i < colum; i += 1) {
    //const newColum = document.createElement('tr');
    //for (let i2 = 0; i2 < line; i2 += 1) {
      //const newLine = document.createElement('td');
      //newLine.className = 'pixel';
      //newColum.appendChild(newLine);
    //}
    //getPixelBoard.appendChild(newColum);
  //}
//}
//createNewTable(5, 5);