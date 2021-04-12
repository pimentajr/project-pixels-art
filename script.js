window.onload = function carregar(){
    document.getElementById('black').classList.add('selected');

}



let pixelBoard = document.querySelector('#pixel-board')
pixelBoard.addEventListener('click', function (event){
    let colorSelected = document.querySelector('.selected')
    let sectedColor = window.getComputedStyle(colorSelected, null).getPropertyValue("background-color");
    let paintPinxel = event.target
    paintPinxel.style.backgroundColor = sectedColor 
    }) 

    function createButton() {
        let getButton = document.querySelector('#clear-board')
        getButton.innerHTML = "Reset"
        getButton.addEventListener('click', function(){
            let getPixel = document.querySelectorAll('#pixel-board>div')
            for(let index =0 ; index < getPixel.length; index += 1){ 
              getPixel[index].style.backgroundColor= 'white'
              }
            })
        }
        createButton()

        let genBoardButton = document.querySelector('#generate-board')
genBoardButton.addEventListener('click', function (){
let boardTable = document.querySelector('#board-size').value
if(boardTable > 0){
while (pixelBoard.firstChild) {
pixelBoard.removeChild(pixelBoard.lastChild);
}

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
else{
    alert('Board inválido!')
}
})

        