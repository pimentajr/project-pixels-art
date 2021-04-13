
let pixelBoard = document.querySelector('#pixel-board');

for (let i=1; i<=5; i+=1 ){
    let columns = document.createElement('div');
    columns.className = 'column';

    for(let j=1; j<=5; j+=1){
        let lines = document.createElement('div');
        lines.className = 'pixel';
        columns.appendChild(lines);
    }
    
    pixelBoard.appendChild(columns)
}



