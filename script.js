function corPadrao() {
  const corInicial = document.getElementById('first-color');
  corInicial.classList.add('selected');
}
window.onload = function () {
  corPadrao();
};
