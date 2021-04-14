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

let colorSelected = document.getElementById('color-palette');
colorSelected.addEventListener('click', function(event){
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