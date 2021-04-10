const linesUsed = 5;
const colors = {
  black: 'black',
  blue: 'lightblue',
  grey: 'lightgrey',
  green: 'lightgreen'
}

function colorBoxes(colors) {
  const boxes = document.querySelectorAll('.color');
  const boxBlack = boxes[0];
  boxBlack.style.backgroundColor = colors.black;
  const blue = boxes[1];
  blue.style.backgroundColor = colors.blue;
  const grey = boxes[2];
  grey.style.backgroundColor = colors.grey;
  const green = boxes[3];
  green.style.backgroundColor = colors.green;
}

colorBoxes(colors);

function pixelBoard() {
  const lineBoard = document.querySelectorAll('.line');
  for (let i = 0; i < linesUsed; i += 1){
    const pixelBox = document.createElement('div');
    pixelBox.className = 'pixel';
    pixelBox.style.backgroundColor = 'white';
    lineBoard[i].appendChild(pixelBox);
  }
}

for (let i = 0; i < linesUsed; i += 1) {
  pixelBoard();
}

window.onload = function() {
  let locateBlack = document.querySelector('.color');
  locateBlack.classList.add('selected');
  let selectedColor = document.querySelector('.selected');
  let locatePixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < locatePixel.length; i += 1){
      locatePixel[i].addEventListener('click', function() {
        locatePixel[i].style.backgroundColor = 'black';
        }
        )
    }
  }


function giveAndRemoveSelec() {
  function removeSelected() {
    let boxes = document.querySelectorAll('.color');
    for (let i = 0; i < boxes.length; i += 1) {
      boxes[i].addEventListener('click', function() {
        let boxWithSelec = document.querySelector('.selected');
        boxWithSelec.classList.remove('selected');
          
      })
    }
      
  }
  removeSelected();

  function giveSelected() {
    let boxes = document.querySelectorAll('.color');
    for (let i = 0; i < boxes.length; i +=1) {
      boxes[i].addEventListener('click', function() {
        boxes[i].classList.add('selected');
      })
    }
  }
  giveSelected();
}
giveAndRemoveSelec();

let locateSelectedClass = document.querySelectorAll('.color');
let locatePixel = document.querySelectorAll('.pixel');
let locateLine = document.querySelectorAll('.line');

for (let i = 0; i < locateSelectedClass.length; i += 1 ){
  locateSelectedClass[i].addEventListener('click', function () {
    var colorNumber = i;
    for (let i = 0; i < locatePixel.length; i += 1){
      locatePixel[i].addEventListener('click', function() {
        let colorsSelected = Object.values(colors);
        locatePixel[i].style.backgroundColor = colorsSelected[colorNumber];
        }
        )
    }
  }
  )
}
