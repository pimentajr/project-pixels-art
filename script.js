const lines = 5;

function colorBoxes(){
    let boxes = document.querySelectorAll('.color');
    const black = boxes[0];
    black.style.backgroundColor = 'black';
    const blue = boxes[1];
    blue.style.backgroundColor = 'lightblue';
    const grey = boxes[2];
    grey.style.backgroundColor = 'lightgrey';
    const green = boxes[3];
    green.style.backgroundColor = 'lightgreen';

}
colorBoxes();

function pixelBoard(){
    let lineBoard = document.querySelectorAll('.line');
    for (let i = 0; i < lines; i++){
        const pixelBox = document.createElement('div');
        pixelBox.className = 'pixel';
        pixelBox.style.backgroundColor = 'white';
        lineBoard[i].appendChild(pixelBox);
    }
}

for (let i = 0; i < lines; i++){
    pixelBoard();
}

window.onload = function() {
    let locateBlack = document.querySelector('.color');
    locateBlack.classList.add('selected');
    let selectedColor = document.querySelector('.selected');
    selectedColor.addEventListener('click',function() {
        //document.body.style.backgroundColor =  'black';
    })
}


function giveAndRemoveSelec() {
    function removeSelected() {
        let boxes = document.querySelectorAll('.color');
        for (let i = 0; i < boxes.length; i +=1) {
            boxes[i].addEventListener('click', function test() {
            
                let boxWithSelec = document.querySelector('.selected');
                boxWithSelec.classList.remove('selected');
                
            })
        }
        
    }
    removeSelected();

    function giveSelected() {
        let boxes = document.querySelectorAll('.color');
        for (let i = 0; i < boxes.length; i +=1) {
            boxes[i].addEventListener('click', function() {
                boxes[i].classList.add('selected');
            })
        }
    }
    giveSelected();

}
giveAndRemoveSelec();