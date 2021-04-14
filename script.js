
let pixelBoard = document.querySelector('#pixel-board');

for (let i=1; i<=5; i+=1 ){
    let line = document.createElement('div');

    for(let j=1; j<=5; j+=1){
        let columns = document.createElement('div');
        columns.className = 'pixel';
        line.appendChild(columns);
    }
    
    pixelBoard.appendChild(line);
}

let palette = document.getElementById('color-palette')

function select() {
  palette.addEventListener('click', function(event){
    let oldColor = document.getElementsByClassName('selected')
    if(event.target.id !== 'color-palette'){
        oldColor.classList.remove('selected')
        event.target.classList.add('selected');
    }
}); 
}

select();



//function changeColor(event){
//    let oldColor = document.getElementsByClassName('selected')
//    if(event.target.id !== 'color-palette'){
//        oldColor.classList.remove('selected')
//        event.target.classList.add('selected');
//    }
//}

//palette.addEventListener('click', changeColor)


