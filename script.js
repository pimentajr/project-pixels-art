const lines = 5;

function colorBoxes(){
    const boxes = document.querySelectorAll('.color');
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

