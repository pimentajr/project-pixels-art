function selectedColor() {
  const colorSelected = document.getElementById('color-palette');
  colorSelected.addEventListener('click', (event) => {
    const myEvent = event.target;

    const divColor = document.querySelectorAll('.color');
    for(let index = 0; index < divColor.length; index += 1) {
      divColor[index].classList.remove('selected');
      if(myEvent.className === 'color') {
        myEvent.classList.add('selected');
      }
    }

  })
}
selectedColor();

function selectedPixel() {
  const pixelSelected = document.getElementById('pixel-board')
  pixelSelected.addEventListener('click', (event) => {
    const myEvent = document.querySelector('.selected');
      if(event.target.className === 'pixel') {
        const color = window.getComputedStyle(myEvent).getPropertyValue('background-color');
        const  clickedPixel = event.target;
        clickedPixel.style.backgroundColor = color;
      }
    })
}
selectedPixel();