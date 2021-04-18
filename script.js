
let pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index <= 5; index += 1 ){
    let line = document.createElement('div');

    for(let j=1; j<=5; j+=1){
        let columns = document.createElement('div');
        columns.className = 'pixel';
        line.appendChild(columns);
    }
    
    pixelBoard.appendChild(line);
}

let palette = document.querySelector('#color-palette')

function select() {
  palette.addEventListener('click', function(event){
    let oldColor = document.querySelector('.selected')
    if(event.target.id !== 'color-palette'){
        oldColor.classList.remove('selected')
        event.target.classList.add('selected');
    }
}); 
}
select();

pixelBoard.addEventListener('click', function(event){

    let fillPixel = document.querySelector('.selected').id;
    if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = fillPixel;
    }
});

let clear = document.getElementById("clear-borad");

clear.addEventListener('click',function(){
    let getPixel = document.querySelectorAll ('.pixel');
    for(let index = 0; index < getPixel.length; index += 1){
        getPixel[index].style.backgroundColor = 'white'
    }
});









//function changeColor(event){
//    let oldColor = document.getElementsByClassName('selected')
//    if(event.target.id !== 'color-palette'){
//        oldColor.classList.remove('selected')
//        event.target.classList.add('selected');
//    }
//}

//palette.addEventListener('click', changeColor)


