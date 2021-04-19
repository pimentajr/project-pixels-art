function showColor(){
    console.log(corSelecionada);
}

let black = document.getElementById('black');

let red = document.getElementById('cor2');
let blue = document.getElementById('cor3');
let green = document.getElementById('cor4');

let cores = document.getElementById('color-palette');

//Cores randomicas 1 até 256
let random2 = Math.floor((Math.random()*30)); //2
let random3 = Math.ceil((Math.random()*150)); //3
let random4 = Math.floor((Math.random()*300)); //4
let randomString2 = random2.toString(); //2
let randomString3 = random3.toString(); //3
let randomString4 = random4.toString(); //4
red.style.backgroundColor = 'rgb('+randomString2+','+randomString3+','+randomString4+')'; //2
blue.style.backgroundColor = 'rgb('+randomString3+','+randomString2+','+randomString4+')'; //3
green.style.backgroundColor = 'rgb('+randomString4+','+randomString3+','+randomString2+')'; //4

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
    corSelecionada = 'rgb('+randomString2+','+randomString3+','+randomString4+')';
    showColor();
});

blue.addEventListener('click', function(event){
    red.className = 'color';
    black.className = 'color';
    blue.className = 'color selected';
    green.className = 'color';
    corSelecionada = 'rgb('+randomString3+','+randomString2+','+randomString4+')';
    showColor();
});

green.addEventListener('click', function(event){
    red.className = 'color';
    black.className = 'color';
    blue.className = 'color';
    green.className = 'color selected';
    corSelecionada = 'rgb('+randomString4+','+randomString3+','+randomString2+')';
    showColor();
});

let selectedColor = document.getElementsByClassName('color selected');
let changeColor = document.querySelector('#pixel-board');



changeColor.addEventListener('click', function(event){
    event.target.style.backgroundColor = corSelecionada;
});

//Botão Limpar
let limparButton = document.getElementById('clear-board');
limparButton.addEventListener('click', function(){
    let capturarPixels = document.getElementsByClassName('pixel');
    for(let i=0;i<capturarPixels.length;i++){
        capturarPixels[i].style.backgroundColor='white';
    }
});

//Botão gerar novos pixels
let numeroNovosPixels = document.getElementById('board-size');
let buttonNovosPixels = document.getElementById('generate-board');
let paizão = document.getElementById('pixel-board');

buttonNovosPixels.addEventListener('click', function(){
    let tamanho = parseInt(numeroNovosPixels.value);
    if(numeroNovosPixels.value<5){
        tamanho=5;
    }
    if(numeroNovosPixels.value>50){
        tamanho=50;
    }
    if(tamanho < 0 || tamanho > 50 || tamanho < 5 || numeroNovosPixels.value == ''){
        alert('Board inválido!');
    }else{
        for(let i=1;i<=tamanho;i++){
            for(let j=1;j<=tamanho;j++){
                let novosPixels = document.createElement('div');
                novosPixels.className='pixel';
                novosPixels.style.backgroundColor='white';
                novosPixels.style.display='inline-block';
                novosPixels.style.height='40px';
                novosPixels.style.width='40px';
                paizão.appendChild(novosPixels);
            }
            let mudarLinha = document.createElement('br');
            paizão.appendChild(mudarLinha);
        }
    }
});