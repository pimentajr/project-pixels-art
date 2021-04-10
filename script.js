function clickSelectedColor() {
  const colorSelected = document.getElementById('color-palette');
  colorSelected.addEventListener('click', (event) => {
    const myEvent = event.target;
    const divColor = document.querySelectorAll('.color');
    for (let index = 0; index < divColor.length; index += 1) {
      divColor[index].classList.remove('selected');
      if (myEvent.className === 'color') {
        myEvent.classList.add('selected');
      }
    }
  });
}
clickSelectedColor();
