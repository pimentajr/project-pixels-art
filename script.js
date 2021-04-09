window.onload = function(){
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
        let pixelBox = document.createElement('div');
        pixelBox.className = 'pixel';
        pixelBox.style.backgroundColor = 'white';
        lineBoard[i].appendChild(pixelBox);
    }
}
for (let i = 0; i < lines; i++){
    pixelBoard();
}
}
