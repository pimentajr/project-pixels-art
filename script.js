window.onload = function selectBlackColor() {
  document.querySelector('#black').classList.add('selected');
};

function setClassSelectd(event) {
  const colorsSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < colorsSelected.length; index += 0) {
    colorsSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
setClassSelectd();
