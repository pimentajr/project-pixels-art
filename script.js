window.onload = startConfig;

function startConfig() {
  setStartColor();
}

const corInicial = document.getElementById('color-1');

function setStartColor() {
  corInicial.className = 'color selected';
  console.log(corInicial);
}