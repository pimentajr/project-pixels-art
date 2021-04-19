const boardSize = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('generate-board');
const color = document.getElementsByClassName('color');
const palleteColor = document.getElementById('color-palette');
const pixel = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
// parte 1 criação do pixel board dinâmico
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
// button de limpar 
buttonClear.onclick = function clear() {
  for( let index = 0; index < pixel.length; index += 1){
    pixel[index].style.backgroundColor = 'white';
  }
}
// cor selecionada
palleteColor.onclick = function chosenColor(e) {
  const selectedColor = document.querySelector('.selected');
  if (selectedColor){
    selectedColor.classList.remove('selected');
  }
  e.target.classList.add('selected');
}


// parte 2 - Função para gerar cores 
//  getRandomColor () - https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let colors = '#';
  for (let index = 0; index < 6; index +=1) {
    colors += letters[Math.floor(Math.random() * 16)];
  }
  return colors;
}

function  colorpalettes() {
  const palletes = ['black'];
for(let index = 0; index < 3; index += 1){
  palletes.push(getRandomColor());
}

for(let index = 0; index < color.length; index += 1){
  color[index].style.backgroundColor = palletes[index];
}
 return palletes;
}

colorpalettes();
