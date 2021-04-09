window.onload = function onLoadWindow() {
  let divSelected = document.getElementById('color-palette');
  let divSelectedUpdate = document.querySelector('.selected');
  let colorSelected = document.querySelector('.selected').classList[1];
  console.log(divSelectedUpdate);
  console.log(document.getElementById('color-palette'));
  divSelected.addEventListener('click', function eventFunction(event) {
    divSelectedUpdate.classList.remove('selected');
    divSelectedUpdate = event.target;
    divSelectedUpdate.classList.add('selected');
    console.log(divSelectedUpdate);
    console.log(document.getElementById('color-palette'));
    colorSelected = divSelectedUpdate.classList[1];
  });
};
