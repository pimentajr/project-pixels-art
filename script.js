function createColorElements() {
    const colorCreation = document.getElementById('color-palette');
  
    for (i = 0; i < 4; i += 1) {
      const genericAttribute2 = document.createElement('li');
      genericAttribute2.className = 'color';
      colorCreation .appendChild(genericAttribute2);
    }
    const color = document.getElementsByClassName('color');
    const black = color[0];
    const green = color[1];
    const red = color[2];
    const blue = color[3];
   
   
  
    black.style.backgroundColor = 'black';
    green.style.backgroundColor = 'green';
    red.style.backgroundColor = 'red';
    blue.style.backgroundColor = 'blue';
  }
  createColorElements(();
  
  function createPixelBoard() {
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        const genericAttribute2 = document.createElement('li');
        genericAttribute2.className = 'pixel';
        document.getElementById('pixel-board').appendChild(genericAttribute2);
      }
    }
  }
  createPixelBoard();
  
  function selectBlackColor() {
    const blackColor = document.getElementsByClassName('color')[0];
    blackColor.className = 'color selected';
  }
  selec();
  
  function selectedClass() {
    const genericAttribute1 = document.getElementById('color-palette');
    genericAttribute1.addEventListener('click', function(event) {
      const genericAttribute2 = document.getElementsByClassName('color');
      for (i = 0; i < genericAttribute2.length; i += 1) {
        if(genericAttribute2[i].className !== 'color') {
            genericAttribute2[i].className = 'color';
        }
        event.target.className = 'color selected';
      }
    })
  }
  selectedClass()
  
  function paintPixel () {
    let genericAttribute1 = document.getElementsByClassName('pixel')
  
    for (let i = 0; i < genericAttribute1.length; i += 1) {
        genericAttribute1[i].addEventListener('click',function() {
        let cor = document.querySelector('.selected')
        genericAttribute1[i].style.backgroundColor = window.getComputedStyle(cor).getPropertyValue('background-color');
      })
    }
  }
  paintPixel ();