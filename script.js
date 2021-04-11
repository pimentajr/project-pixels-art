window.onload = function() {
    linha()
}



function linha(){
    for (index = 0; index < 25; index += 1){
        let addPixel = document.querySelector('#pixel-board')
        let pixel = document.createElement('div')
        pixel.classList.add('pixel')
        addPixel.appendChild(pixel)
    }   
}

