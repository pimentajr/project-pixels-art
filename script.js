window.onload = function carregar(){
    document.getElementById('black').classList.add('selected');

}



pixelBoard.addEventListener('click', (event) => {
    const colorActual = document.querySelector('.selected').id;
    if (event.target.className === 'pixel') {
      const evTarget = event.target;
      evTarget.style.backgroundColor = colorActual;
    }
  }); 

    function createButton() {
        let getButton = document.querySelector('#clear-board')
        getButton.innerHTML = "Reset"
        getButton.addEventListener('click', function(){
            let getPixel = document.querySelectorAll('#pixel-board>div')
            for(let index =0 ; index < getPixel.length; index += 1){ 
              getPixel[index].style.backgroundColor= 'white'
              }
            })
        }
        createButton()

