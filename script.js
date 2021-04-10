function setInitialColor() {
  const element = document.querySelector('.black');
  element.classList.add('selected');
}

setInitialColor();

const element = document.querySelector('#color-palette');

function addOrRemove(event) {
  const targetElement = event.target;
  const getClass = document.getElementsByClassName('selected');
  console.log(getClass);

  for (let index = 0; index < getClass.length; index += 1) {
    getClass[index].classList.remove('selected');
  }
  targetElement.classList.add('selected');
}

element.addEventListener('click', addOrRemove);
