    window.onload = function(){
        document.getElementById('black').classList.add('selected');

    }



    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.addEventListener('click', function (event){
        let colorSelected = document.querySelector('.selected')
        let sectedColor = window.getComputedStyle(colorSelected, null).getPropertyValue("background-color");
        let paintPinxel = event.target
        paintPinxel.style.backgroundColor = sectedColor 
        }) 

        function createDivs() {
            let getBody = document.querySelector('body')
            let session = document.createElement('section')
            let sessionButton = document.createElement('button')
            sessionButton.id = "clear-board"
            getBody.appendChild(sessionButton)
            session.id = "pixel-board"
            getBody.appendChild(session)
            }
          createDivs()

        function createButton() {
            let getButton = document.querySelector('#clear-board')
            getButton.innerHTML = "Limpar"
            getButton.addEventListener('click', function(){
                let getPixel = document.querySelectorAll('#pixel-board>div')
                let getPixelBoard = document.querySelector('#pixel-board')
                for(let index =0 ; index < getPixel.length; index += 1){ 
                getPixel[index].style.backgroundColor= 'white'
                getPixelBoard.style.backgroundColor= 'white'
                }
              })
            }
               createButton()
               
               function createPixel() {
                let getSession = document.querySelector('#pixel-board')
                let pixelSize = 5;
               }                     
       

