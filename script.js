
// ex 7.
let colors = document.querySelectorAll('.color');
for (let item of colors) {
  item.addEventListener('click', removeClass);
  item.addEventListener('click', addClass);
}

function removeClass() {
  for (let index = 0; index < colors.length; index +=1) {
    colors[index].classList.remove('selected')
  }
  
}

function addClass(event) {
  event.target.classList.add('selected');
  
}
