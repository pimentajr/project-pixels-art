function showColor(){
    console.log(corSelecionada);
}

let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let cores = document.getElementById('color-palette');

let corSelecionada = 'black';

black.addEventListener('click', function(event){
    black.className = 'color selected';
    red.className = 'color';
    blue.className = 'color';
    green.className = 'color';
    corSelecionada = 'black';
    showColor();
});

red.addEventListener('click', function(event){
    red.className = 'color selected';
    black.className = 'color';
    blue.className = 'color';
    green.className = 'color';
    corSelecionada = 'red';
    showColor();
});

blue.addEventListener('click', function(event){
    red.className = 'color';
    black.className = 'color';
    blue.className = 'color selected';
    green.className = 'color';
    corSelecionada = 'blue';
    showColor();
});

green.addEventListener('click', function(event){
    red.className = 'color';
    black.className = 'color';
    blue.className = 'color';
    green.className = 'color selected';
    corSelecionada = 'green';
    showColor();
});

let selectedColor = document.getElementsByClassName('color selected');
let changeColor = document.querySelector('#pixel-board');

changeColor.addEventListener('click', function(event){
    event.target.style.backgroundColor = corSelecionada;
});