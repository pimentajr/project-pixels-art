let randomC1 = document.getElementById('randomColor1');
let randomC2 = document.getElementById('randomColor2');
let randomC3 = document.getElementById('randomColor3');

function randomRGB() {
  let random = parseInt(Math.random() * 255);
  let random1 = parseInt(Math.random() * 255);
  let random2 = parseInt(Math.random() * 255);
  let rgb = `rgb(${random}, ${random1}, ${random2})`;
  return rgb
}


window.onload = function() {
let rB1 = randomRGB();
let rB2 = randomRGB();
let rB3 = randomRGB();
  if (rB1 !== rB2 | rB2 !== rB3 | rB3 !== rB1) {
    randomC1.style.backgroundColor = rB1;
    randomC2.style.backgroundColor = rB2;
    randomC3.style.backgroundColor = rB3;
  }
}
