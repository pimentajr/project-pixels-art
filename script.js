const boardSize = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('generate-board');

// criando pixel board  
function createPixelBoard(input){
  for(let r = 0; r < input; r += 1){
    const row = document.createElement('div');
    pixelBoard.appendChild(row);
    row.className = 'row';
  for(let c = 0; c < input; c +=1){
    const cell = document.createElement('div');
    row.appendChild(cell);
    cell.className = 'pixel';
  }
  }
} 
//button VQV  
button.onclick =  function expandBoard() {
   pixelBoard.innerHTML = '';
   let input = boardSize.value;
   if(input === '') {
     alert ('Board inválido!');
   }
   createPixelBoard(input);
};

