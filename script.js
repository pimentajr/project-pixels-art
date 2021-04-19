//função selecionar cor
function selecColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1){
  cores [i].addEventListener('click', selecColor);
}
//função troca cor
const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    const newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixels[i].tsyle.backgroundColor = corNova;
  })
}