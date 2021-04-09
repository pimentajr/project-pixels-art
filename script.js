const colorDivs = document.querySelectorAll('.color');

function setColorToPalete() {
  for (let index = 0; index < colorDivs.length; index += 1) {
    const colorDivsIDValue = colorDivs[index].id;
    colorDivs[index].style.backgroundColor = colorDivsIDValue;
  }
}

setColorToPalete();
