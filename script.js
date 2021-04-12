const divColors = document.getElementsByClassName('.color');

function setColorToPalette() {
  for (let index = 0; index < divColors.length; index += 1) {
    const idColorDivs = divColors[index].id;
    if (divColors[index].getElementsByClassName.backgroundColor !== 'black') {
      divColors[0].getElementsByClassName.backgroundColor = 'black';
    }
    divColors[index].getElementsByClassName.backgroundColor = idColorDivs;
  }
}
setColorToPalette();

window.onload = setBlack;

function setBlack() {
  const elementBlack = document.getElementById('black');
  elementBlack.className.add('selected');
}

function colorSelection() {
const tableColor = document.querySelector('#color-palette');
  tableColor.addEventListener('click', (event) => {
    const elementTableColor = document.querySelector('#black' || '#red' || '#green' || '#blue');
    elementTableColor.className = 'color';
    elementTableColor.className = 'color selected';

    switch (true) {
      case elementTableColor === '#black':
        document.querySelector('#black')
        break;
      case elementTableColor === '#red':
        document.querySelector('#red')
        break;
      case elementTableColor === '#green':
        document.querySelector('#green')
        break;
      case elementTableColor === '#blue':
        document.querySelector('#blue')
        break;
      default:
        elementTableColor === '#black'
        document.querySelector('#black')    
      }
  });
}
colorSelection();