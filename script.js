function colorPalette() {
  function startColorPage() {
    const startColor = document.getElementById('black');
    startColor.classList.add('selected');
  }
  startColorPage();
}

window.onload = colorPalette;
