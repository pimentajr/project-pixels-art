
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

let colorPaleteDiv = document.querySelector('#color-palette');

function selectColor() {
  colorPaleteDiv.addEventListener('click', function(event){
    let colorDiv = document.querySelector('.selected');
    if (event.target.id !== 'color-palette'){
      colorDiv.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }); 
}

selectColor();