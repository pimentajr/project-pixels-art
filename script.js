
function inicio() {
  let corPincel = document.getElementsByClassName('color');
  corPincel[0].classList.add('selected');
  
  addEventListener("click", altCor, false);
  
  function altCor(e) {
    const corEscolhida = e.target;
    const corAtual = document.querySelector('.color.selected');
    if (corEscolhida !== corAtual) {
      corEscolhida.classList.remove('selected');
      corEscolhida.classList.add('selected');
    }
  }

  //  for(let index=0; index<=corPincel.length; index += 1){
  //     (corPincel[index].addEventListener("click"))
  //     corPincel[index].classList.add('selected');
  //   }
   //    document.getElementById('teste').style.backgroundColor(x.tagname);
 }
}

//  function mudaCor(e){
//   for(pixel.addEventListener("click") in object){

//   }
//  }
window.onload = inicio;
