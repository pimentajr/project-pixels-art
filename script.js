window.onload = function() {

function createPixel(tagName) {
    let element = document.createElement(tagName);
    return element
}

let pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index <= 25; index += 1) {
    let pixel = pixelBoard.appendChild(createPixel('div'));
    pixel.className = 'pixel'
    pixel[index]
    }
let colorPalette = document.querySelector('#color-palette')
    colorPalette.addEventListener('click', function(event){
        let selectedColor = event.target.className;
        
    })
}
