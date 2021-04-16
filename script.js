//Captura a div q terá nossa paleta de cores e em seguida estipula-se um array de cores para serem usadas nesse contexto;
let colorPalette = document.querySelector('#color-palette');

let cores = ['black', 'red', 'blue', 'green'];

//Cria-se as divs de forma dinâmica que possui o background de acordo  com o o valor do indice. 
for(let index = 0; index < cores.length; index += 1){
  let nameCor = cores[index];
  let colorsDiv = document.createElement('div');
  colorPalette.appendChild(colorsDiv);
  colorsDiv.className = 'color';
  colorsDiv.id = nameCor;
  colorsDiv.innerHTML = nameCor;

  if(colorsDiv.innerText.includes('black')){
    colorsDiv.className += ' selected'
  }
}

//Iterando o arry com o for, aqui é capturado a ID do elemento.target e em seguida é definida a cor de fundo desse elemento.
for(let index = 0; index < cores.length; index += 1){
  let cor = document.getElementById(cores[index]);
  cor.style.backgroundColor = cores[index];
}

//Captura o elemento HTML que irá ser o nosso container e em seguida cria as linhas com o primeiro 'for' e as colunas(pixels) com o segundo 'for'  
let pixelsTable = document.querySelector('#pixel-board');
function makeTable (linhas, pixels){
for(let linha = 0; linha < linhas; linha += 1){
  let linhas = document.createElement('tr');
  pixelsTable.appendChild(linhas);
  for(let colunas = 0; colunas < pixels; colunas += 1){
    let coluna = document.createElement('td');
    pixelsTable.appendChild(coluna);
    coluna.className = 'pixel';
  }
}
}
makeTable(5,5);

//Define a cor selecionada como a proxima para ser usada como tinta, e remove ou adiciona a classe 'selected' de acordo com o elemento target;
let selectedColor;
colorPalette.addEventListener('click',function (event){
  selectedColor = event.target.id;
  const corSelected = document.querySelector('.selected');
  if (event.target.id !== 'color-palette') {
    corSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
});

//Define preto como cor inicial e faz com que ao clicar em uma cor da paleta, essa cor seja a que irá preencher a tabela de
pixelsTable.addEventListener('click', function(event){
 let pixe = event.target;
 pixe.style.backgroundColor = 'black';
 pixe.style.backgroundColor = selectedColor;
})

//Cria botao que limpa todos os pixels.
let allPixels = document.getElementsByClassName('pixel');
let button = document.getElementById('clear-board');
button.addEventListener('click', function(event){
  for(let blocos of allPixels){
    blocos.style.backgroundColor = 'rgb(255, 255, 255)';
  }
})
