window.onload = function() {
    let blackColor = document.querySelector('#preto')
    blackColor.classList.add("selected");
}
 
let colorTable = document.querySelector('#color-palette')
colorTable.addEventListener('click', function (event){
    let colorSelected = document.querySelector('.selected')
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected')
})

let pixelBoard = document.querySelector('#pixel-board')
pixelBoard.addEventListener('click', function (event){
    let sectedColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue("background-color");
    let pixelPaint = event.target
    pixelPaint.style.backgroundColor = sectedColor 
    })

let clearButton = document.querySelector('#clear-board')
clearButton.addEventListener('click', function(){
let allPixel = document.querySelectorAll('.pixel')
for(let index = 0; index < allPixel.length; index += 1){
allPixel[index].style.backgroundColor = 'white';
}
})