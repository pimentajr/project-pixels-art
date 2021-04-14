function createTable() {
  const element = document.createElement('div');
  element.className = 'pixel';
  return element;
}

const pixelboard1 = document.getElementById('first-row');
const pixelboard2 = document.getElementById('second-row');
const pixelboard3 = document.getElementById('third-row');
const pixelboard4 = document.getElementById('fourth-row');
const pixelboard5 = document.getElementById('fifht-row');

pixelboard1.appendChild(createTable());
pixelboard1.appendChild(createTable());
pixelboard1.appendChild(createTable());
pixelboard1.appendChild(createTable());
pixelboard1.appendChild(createTable());
pixelboard2.appendChild(createTable());
pixelboard2.appendChild(createTable());
pixelboard2.appendChild(createTable());
pixelboard2.appendChild(createTable());
pixelboard2.appendChild(createTable());
pixelboard3.appendChild(createTable());
pixelboard3.appendChild(createTable());
pixelboard3.appendChild(createTable());
pixelboard3.appendChild(createTable());
pixelboard3.appendChild(createTable());
pixelboard4.appendChild(createTable());
pixelboard4.appendChild(createTable());
pixelboard4.appendChild(createTable());
pixelboard4.appendChild(createTable());
pixelboard4.appendChild(createTable());
pixelboard5.appendChild(createTable());
pixelboard5.appendChild(createTable());
pixelboard5.appendChild(createTable());
pixelboard5.appendChild(createTable());
pixelboard5.appendChild(createTable());

// requisito 7 (deixar o selected apenas na cor selecionada)
const colorSelected = document.getElementById('color-palette');
colorSelected.addEventListener('click', function(event) {
let colorClicked = event.target.className; 
let colorSelectedClassIndex = document.querySelectorAll('.color');
let colorSelectedclass = document.querySelector('.selected');
  if (colorSelectedclass.className !== colorClicked) {
    for (let i = 0; i < colorSelectedClassIndex.length; i +=1) {
      colorSelectedclass.classList.remove('selected');
      if (colorSelectedClassIndex[i].className === colorClicked) {
        colorSelectedClassIndex[i].classList.add('selected');
      }
    } 
}
})

// requisito 8 (pintar os quadros do pixel)
let pixelselected = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelselected.length; i +=1) {
pixelselected[i].addEventListener('click', function(){
  let colorSelectedclass1 = document.querySelector('.selected');
    if (colorSelectedclass1.classList.contains('blue')) {
      pixelselected[i].className = 'pixel blue';  
    }
    else if (colorSelectedclass1.classList.contains('black')) {
      pixelselected[i].className = 'pixel black'; 
    }
    else if (colorSelectedclass1.classList.contains('red')) {
      pixelselected[i].className = 'pixel red'; 
    }
    else if (colorSelectedclass1.classList.contains('green')) {
      pixelselected[i].className = 'pixel green'; 
    }
})
}