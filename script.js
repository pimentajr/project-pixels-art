
//6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
//criar a função click e quando começar seja ja a seleção black
window.onload = function() {


let pixelBoard = document.getElementById('pixel-board');
let colorPallete = document.getElementById('color-pallete');
let colors = document.querySelectorAll('.color');
let black = document.getElementById('black');
let rose = document.getElementById('rose');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');

function selectColor () {
  
console.log(colors);
  for(let index = 0; index < colors.length; index +=1) {
    let block = colors[index].id;
    
    if(block === 'black') {
      colors[index].classList.add('selected');
    }
  }
}
selectColor();

//add selector




//pegar o id
// este id preciso dizer em outra funcao:/ quando for classe x faça isso

//senao deixa clicado preto
black.classList.add ='selected';





  

}
