function setInitialColor() {
  const element = document.querySelector('.black');
  element.classList.add('selected');
}

setInitialColor();

const element = document.querySelector('#color-palette');
element.addEventListener('click', function(event){
let targetElement = event.target;
  if (targetElement === 'selected')
    targetElement.classList.remove('selected');
  else {
    targetElement.classList.toggle('selected');
  }
});