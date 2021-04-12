const randomC1 = document.getElementById('randomColor1');
const randomC2 = document.getElementById('randomColor2');
const randomC3 = document.getElementById('randomColor3');

function randomRGB() {
  const random = parseInt((Math.random() * 255), 10);
  const random1 = parseInt((Math.random() * 255), 10);
  const random2 = parseInt((Math.random() * 255), 10);
  const rgb = `rgb(${random}, ${random1}, ${random2})`;
  return rgb;
}

function randomColors() {
  const rB1 = randomRGB();
  const rB2 = randomRGB();
  const rB3 = randomRGB();
  if (rB1 !== rB2 || rB2 !== rB3 || rB3 !== rB1) {
    randomC1.style.backgroundColor = rB1;
    randomC2.style.backgroundColor = rB2;
    randomC3.style.backgroundColor = rB3;
  }
}

window.onload = function () {
  randomColors();
};
