function holdColor(event) {
  console.log('fui clicado', event.target);
  let colorSelected = document.getElementsByClassName('selected')[0];
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

// adicionar o click para cada elemento
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
color1.addEventListener('click', holdColor);
color2.addEventListener('click', holdColor);
color3.addEventListener('click', holdColor);
color4.addEventListener('click', holdColor);
