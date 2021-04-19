document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('blue').style.backgroundColor = 'blue';
document.getElementById('yellow').style.backgroundColor = 'yellow';
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

let savedColor = 'black';
// eslint-disable-next-line no-unused-vars
function selectionColor(color) {
    const colorTarget = color.target;
    if (colorTarget.classList.contains('color')) {
        const removeColor = document.querySelector('.selected');
        removeColor.classList.remove('selected');

        savedColor = colorTarget.style.backgroundColor.classList.add('selected');
    }
}

function setColor(color) {
    const newColor = color.target;
    if (newColor.className === 'pixel') {
        newColor.style.backgroundColor = savedColor;
    }
}

window.onnload = selectingColor;
colorPalette.addEventListener('click', selectingColor)