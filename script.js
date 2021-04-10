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
let genBoardButton = document.querySelector('#generate-board')
genBoardButton.addEventListener('click', function (){
let boardTable = document.querySelector('#board-size').value
while (pixelBoard.firstChild) {
pixelBoard.removeChild(pixelBoard.lastChild);
}

if(boardTable > 5 && boardTable < 50){
for(let index = 0; index < boardTable; index += 1){
let tr = document.createElement('div')
tr.classList.add('tr')
pixelBoard.appendChild(tr)
for(let index = 0; index < boardTable; index += 1){
let newPixel = document.createElement('div')
newPixel.classList.add('pixel')
tr.appendChild(newPixel)  
}      
}
}
else if(boardTable >= 50){
    for(let index = 0; index < 50; index += 1){
        let tr = document.createElement('div')
        tr.classList.add('tr')
        pixelBoard.appendChild(tr)
        for(let index = 0; index < 50; index += 1){
        let newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        tr.appendChild(newPixel)  
        }
    }
}

else if(boardTable > 0 && boardTable <= 5){
    for(let index = 0; index < 5; index += 1){
        let tr = document.createElement('div')
        tr.classList.add('tr')
        pixelBoard.appendChild(tr)
        for(let index = 0; index < 5; index += 1){
        let newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        tr.appendChild(newPixel) 
        }
    }
}
else{
    alert('Board inválido!')
}
})
