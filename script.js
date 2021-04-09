window.onload = function(){

  function addClassPixels() {
    let pixels = document.getElementById('pixel-board').children;

    for (index = 0; index < pixels.length; index += 1) {
      pixels[index].className = 'pixel';
    }
    
  }
  
  addClassPixels();
  

}