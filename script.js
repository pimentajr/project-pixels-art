window.onload = function() {
  
  document.querySelector('#black').classList.add('selected')

  let colorSection = document.getElementById('color-palette')

  colorSection.addEventListener('click', function(event){
    for (let index = 1; index < 5; index +=1){
      let divChild = document.querySelector(`#color-palette div:nth-child(${index})`)
      divChild.className = 'color'
    }

    if(event.target !== colorSection){
      event.target.classList.add('selected')
    }
  })

  let pixels = document.querySelector('#pixel-board')

  pixels.addEventListener('click', function(event){
    let actualColor = document.querySelector('.selected')
    let pixel = event.target
    pixel.id = actualColor.id
  })

  let button = document.querySelector('#clear-board')


  button.addEventListener('click', function(){
    let allPixels = document.querySelectorAll('.pixel')
    for(let index = 0; index < allPixels.length; index += 1){
      allPixels[index].removeAttribute('id')
    }
  })

}