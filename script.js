function teste(event) {
  const colorList = document.querySelectorAll('.color');

  for (let index = 0; index < colorList.length; index += 1) {
    if (colorList[index].className !== 'color') {
      colorList[index].className = 'color';
    }
  }

  event.target.classList.add('selected');
}

const colorPallete = document.querySelector('#color-palette');
colorPallete.addEventListener('click', teste);
