function colorPalette() {
  function startColorPage() {
    const startColor = document.getElementById('black');
    startColor.classList.add('selected');
  }
  startColorPage();

  function setSelectClass(event) {
    let setElement = document.querySelectorAll('.selected');
    for(let index = 0; setElement.length; index += 1) {
      setElement[index].classList.remove('selected')
    }
    event.target.classList.add('selected');
  }

  let colorFather = document.querySelector('color-palette');

  colorFather.addEventListener('click', setSelectClass);
}

onload = colorPalette;
