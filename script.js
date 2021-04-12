let x=0;

function inicio() {
  let corPincel = document.getElementsByClassName('color');
  corPincel[0].classList.add('selected');
  altCor;

}
 function oQueFazer(e) {

}
 function altCor(e) {
   switch (corPincel[e].addEventListener("click")) {
     case corPincel[0].addEventListener("click"):
     corPincel[0].classList.add('selected');
     break;
     case corPincel[1].addEventListener("click"):
     corPincel[1].classList.add('selected');
     break;
     case corPincel[2].addEventListener("click"):
     corPincel[2].classList.add('selected');
     break;
     case corPincel[3].addEventListener("click"):
     corPincel[3].classList.add('selected');
     break;
   }
 }

 function mudaCor(e){
  for(pixel.addEventListener("click") in object){

  }
 }
window.onload = inicio;
