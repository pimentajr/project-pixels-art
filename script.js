let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let cores = document.getElementById('color-palette');

black.addEventListener('click', function(event){
    black.className = 'color selected';
    red.className = 'color';
    blue.className = 'color';
    green.className = 'color';
});

red.addEventListener('click', function(event){
    red.className = 'color selected';
    black.className = 'color';
    blue.className = 'color';
    green.className = 'color';
});

blue.addEventListener('click', function(event){
    red.className = 'color';
    black.className = 'color';
    blue.className = 'color selected';
    green.className = 'color';
});

green.addEventListener('click', function(event){
    red.className = 'color';
    black.className = 'color';
    blue.className = 'color';
    green.className = 'color selected';
});
