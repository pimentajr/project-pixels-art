window.onload = function carregar(){
    document.getElementById('black').classList.add('selected');

}

colorTable = document.querySelector('#color-palette')
colorTable.addEventListener('click', function (event){
let colorSelected = document.querySelector('.selected')
colorSelected.classList.remove('.selected');
event.target.classList.add('selected')
})

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
              getPixel[index].style.backgroundColor='white'
              }
            })
        }
        createButton()