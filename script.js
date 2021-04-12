const colorPalette = document.querySelector('#color-palette');

const primeiraCor = document.createElement('li');
primeiraCor.className = 'color preto';
colorPalette.appendChild(primeiraCor);

for (let index = 0; index < 1; index += 1) {
  const segundaCor = document.createElement('li');
  segundaCor.className = 'color verde';
  colorPalette.appendChild(segundaCor);
  for (let segundoIndex = 0; segundoIndex < 1; segundoIndex += 1) {
    const terceriaCor = document.createElement('li');
    terceriaCor.className = 'color azul';
    colorPalette.appendChild(terceriaCor);
    for (let terceiroIndex = 0; terceiroIndex < 1; terceiroIndex += 1) {
      const quartaCor = document.createElement('li');
      quartaCor.className = 'color rosa';
      colorPalette.appendChild(quartaCor);
    }
  }
}
