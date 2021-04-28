  //Declaração das constantes que serão utilizadas.

const paletteColor = document.querySelector('#color-palette');
const quadroPixel = document.querySelector('#pixel-board');
const tamanhoQuadro = document.getElementById('board-size');
const botaoGerar = document.getElementById('generate-board');
const botaoLimpar = document.querySelector('#clear-board');

  //Função para criar a paleta de cores.

function criaPaleta() {
    const cores = color();
    let index = ' ';
    for (index = 0; index < cores.length; index += 1) {
      const paleta = document.createElement('div');
      paleta.style.backgroundColor = cores[index];
      paleta.classList.add('color');
      if (index === 0) {
        paleta.classList.add('selected');
      }
      paletteColor.appendChild(paleta);
    }
}
criaPaleta();

  //Função para gerar um número aleatório que será utilizado para gerar um rgb aleatório.

function geraNumero() {
  return Math.floor(Math.random() * 256);
}

  //Função para gerar o rgb aleatório.

function geraRgb() {
  const red = geraNumero();
  const green = geraNumero();
  const blue = geraNumero();
  return `rgb( ${red} , ${green} , ${blue})`;
}

  //Função que adiciona o rgb aleatorio aos blocos da paleta de cores.

function color() {
  const colors = ['black'];
  while (colors.length < 4) {
    colors.push(geraRgb());
  }
  return colors;
}

  //Função que gera o quadro de pixels.

function quadroPixels(capacidade) {
  let linhas = ' ';
  for (linhas = 0; linhas < capacidade; linhas += 1) {
    const quadro = document.createElement('div');
    quadro.classList.add('linha');
    quadroPixel.appendChild(quadro);
    let colunas = ' ';
  for (colunas = 0; colunas < capacidade; colunas += 1) {
    const pixel = document.createElement('div');
    quadro.appendChild(pixel);
    pixel.className = 'pixel';
    }
  }
}
quadroPixels(5);

  //Função que muda a cor selecionada na paleta.

let cor = 'black';
function mudaPaleta(color) {
  const remover = document.getElementsByClassName('selected');
let index = ' ';
  for (index = 0; index < remover.length; index += 1) {
    remover[index].classList.remove('selected');
}
  const selected = color.target;
  cor = selected.style.backgroundColor;
  selected.classList.add('selected');
}
paletteColor.addEventListener('click', mudaPaleta);

  //Função que colore  pixel com a cor seleciona anteriormente.

function colorir(event) {
  event.target.style.backgroundColor = cor;
}
quadroPixel.addEventListener('click', colorir);

  //Função que redefine o quadro de pixels para sua cor original, inteiramente branco.

function redefinir() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
botaoLimpar.addEventListener('click', redefinir);

  //Função que define o número mínimo e máximo de colunas X linhas no quadro de pixels.

function minSizeAndMaxSize(tamanho) {
  if (tamanho < 5 && tamanho >= 0) {
    tamanho = 5;
  }
  if (tamanho > 50) {
    tamanho = 50;
  }
    return tamanho;
}

  //Função que gera a tabela através do número digitado pelo usuário.

function gerarTabela() {
  const tamanho = tamanhoQuadro.value;
  if (!tamanho) {
    return alert('Board inválido!');
  }
  const  tamanhoDefinido= minSizeAndMaxSize(tamanho);
  quadroPixel.innerHTML = ' ';
    return quadroPixels(tamanhoDefinido);
}