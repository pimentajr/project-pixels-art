const black = document.getElementById('black');
const pink = document.getElementById('pink');
const blue = document.getElementById('blue');
const red = document.getElementById('red');

const paletaDeCores = [black, pink, blue, red];

function selectColorPixel(event) { 
  for (let index = 0; index < paletaDeCores; index += 1) {
    if (paletaDeCores[index].classList.contains('selected')) {
      paletaDeCores[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
  console.log(event.target.className);
}

black.addEventListener('click', selectColorPixel);
pink.addEventListener('click', selectColorPixel);
blue.addEventListener('click', selectColorPixel);
red.addEventListener('click', selectColorPixel);
