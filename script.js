window.onload = function() {
    let blackColor = document.getElementById('black');
    blackColor.className += ' selected';
}
function setBoarSize () {
  let vqv = document.querySelector('#generete-board');   
  let input = document.querySelector('input');
  let pixelBoard = document.querySelector('#pixel-board');
  vqv.addEventListener ('click', function()) {
    let boardSize = input.value;
    if (boardSize) {
      pixelBoard.innerText = '';
      if (boardSize < 5){
        boardSize = 5;
      }
      if (boardSize > 50) {
        boardSize = 50;
      }
      function newBoard (boardSize) {
        for (index = 0; index < boardSize; index += 1) {
          let line = document.createElement('tr');
          let pixelBoard = document.getElementById('pixel-board');
          pixelBoard.appendChild(line);
          for (index2 = 0; index2 < boardSize; index2 += 1) {
            let colum = document.createElement('td');
            colum.className = 'pixel';
            document,getElementByYd('pixel-board').appendChild(colum);
          }
        }
      }
      newBoard(boardSize);
    }
    else {
      alert('Board inválido!');
    }
  }
}
function selectedColorChoise () {
  let colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener ('click', function (event) {
    let colors = document.getElementsByClassName('color');
    for (index3 = 0; index3 < colors.length; index3 += 1) {
      colors[index3].classList.remove('selected');
    }
    event.target.classList.add('selected');
  })
}
function paintPixel () {
  let pixelsBoard = document.querySelector('#pixel-board');
  pixelsBoard.addEventListener('click', function (event){
    let selectedColor = document.querySelector('.selected');
    let selectedColorStyle = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
    event.target.style.backgroundColor = selectedColorStyle;
  })
}
function clearBoard () {
  let clear = document.querySelector('#clear-board');
  clear.addEventListener('click', function () {
    pixels = document.getElementsByClassName ('pixel');
    for (index4 = 0; index4 < pixels.length; index4 += 1) {
      pixels[index4].style.backgroundColor = '';
    }
  })
}
function makeBoard () {
  for (index5 = 0; index5 < 5; index5 += 1) {
    let line2 = document.createElement('tr');
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(line2);
    for (index6 = index6 < 5; index6 += 1) {
      let colum2 = document.createElement('td')
      colum2.className = 'pixel';
      document.getElementById('pixel-board').appendChild(colum2);
    }
  }
}
