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
    }
  }
}