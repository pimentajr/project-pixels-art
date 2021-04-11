const colorSelected = document.querySelectorAll('#color-palette');

function selectColor() {
  colorSelected.addEventListener('click', (event) => {
    const etarget = event.target;
    const color = document.querySelectorAll('.color')[0];
    color.forEach((element) => element.classList.remove('selected'));
    etarget.classList.add('selected');
  });
}
selectColor();
