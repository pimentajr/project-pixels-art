window.onload = function () {
  let divSelected = document.getElementById('color-palette');
  let divSelectedUpdate = document.querySelector('.selected');
  let colorSelected = document.querySelector('.selected').classList[1];
  divSelected.addEventListener('click',function(event) {
    divSelectedUpdate.classList.remove('selected');
    divSelectedUpdate = event.target;
    divSelectedUpdate.classList.add('selected');
    //divSelectedUpdate = divSelected.classList.add('selected');
    console.log(divSelectedUpdate);
    console.log(document.getElementById('color-palette'));
    //document.querySelector('.selected')
    //console.log(divSelected);
  })
}