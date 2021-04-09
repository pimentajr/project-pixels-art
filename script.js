const colors = document.getElementsByClassName('color');

function setColors() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].setAttribute('style', `background-color: ${colors[index].dataset.color};`);
  }
}

function onPageLoad() {
  setColors();
}

window.onload = onPageLoad;
