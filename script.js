window.onload = function board() {
    let height = 5;
    let width = 5;
    let pixelBoard = document.getElementById("pixel-board");
    for (index = 0;index < height; index += 1){
        let div = document.createElement('div');
        for (jndex = 0;jndex<width; jndex += 1){
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            div.appendChild(pixel);
        }
        pixelBoard.appendChild(div)
    }
}

let paleta = document.getElementById('color-palette')
paleta.addEventListener('click',selectedColor);
paleta.addEventListener('click', pickColor)

let quadro = document.getElementById('pixel-board')
quadro.addEventListener('click',setColor)

function selectedColor(event){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected')
    event.target.classList.add('selected')
    console.log(event.target)
}

let bew = 'rgb(0,0,0)';

function pickColor(event) {
    let color = document.querySelector('.selected');
    event = window.getComputedStyle(color,null).getPropertyValue('background-color');
    bew = event;
    console.log(event)

}


function setColor(event){
     event.target.style.backgroundColor =  bew;
     console.log(event.target.style)
}