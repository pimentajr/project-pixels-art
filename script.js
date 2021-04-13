const black = document.querySelector('#color1');
black.classList.add('selected');

const palcolors = document.getElementByTagName('color-palette');

function addPalClass(event) {
    const Classes = document.querySelectorAll('.selected');
    const choosenClasses = event.target;
    for (let index = 0; index < Classes.length; index += 1){
        Classes[index].classList.remove('selected');
    }
    choosenClasses.classList.add('selected');
}

const addClass = document.getElementByTagName('color-palette');
addClass.addEventListener('click', addPalClass);

function pixelFill() {
    const selectedColor = document.querySelector('#pixel-board');
    selectedColor.addEventListener('click', (event) => {
        const allPixels = event.target;
        const currentColor = document.getElementsByClassName('selected');
        if (allPixels.className === 'pixel'){
            allPixels.style.backgroundColor = currentColor.style.backgroundColor;
        }
    });
}

pixelFill();

const cleartableButton = document.querySelector('#clear-board');

cleartableButton.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (index = 0; index < pixel.length; index += 1){
        const pixels = pixel[index];
        pixels.backgroundColor = 'white';
    }
});
