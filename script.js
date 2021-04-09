function setSelectedClass(event) {
  const selectedElement = document.getElementsByClassName('selected')[0];
  selectedElement.classList.remove('selected');

  const newSelection = event.target;
  newSelection.classList.add('selected');
}

const selectors = document.getElementsByClassName('color');
for (let index = 0; index < selectors.length; index += 1) {
  selectors[index].addEventListener('click', setSelectedClass);
}

console.log(document.getElementsByClassName('selected'));
