window.onload = onLoadWindow();

function onLoadWindow() {
  /*function getClassNameOnClick(event) {
    return event.target.className;
  }
  console.log(addEventListener('click', getClassNameOnClick));*/
  let divColorSelected = document.getElementById('color-palette');
  let divColorSelectedUpdate = document.querySelector('.selected');
  let colorSelected = document.querySelector('.selected').classList[1];
  //sessionStorage.setItem('colorSelected', colorSelected);
  //console.log(sessionStorage.colorSelected);
  divColorSelected.addEventListener('click', function(event) {
    divColorSelectedUpdate.classList.remove('selected');
    divColorSelectedUpdate = event.target;
    divColorSelectedUpdate.classList.add('selected');
    colorSelected = divColorSelectedUpdate.classList[1];
    //sessionStorage.setItem('colorSelected', colorSelected);
  });
  
  let pixelSelected = document.getElementById('pixel-board');
  pixelSelected.addEventListener('click', function(event) {
    let printPixel = event.target;
    if (printPixel.classList.length > 1) {
      printPixel.classList.remove(printPixel.classList[1]);
    }
    printPixel.classList.add(colorSelected);
  })
  //let varMain = document.getElementsByTagName('main');
  //varBody.addEventListener('click', getClassNameOnClick('click'));
  //addEventListener('click', getClassNameOnClick);
  
  //eventClick(divSelected);
};