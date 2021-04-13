
let cores = ['black', 'red', 'blue', 'green', 'pink', 'yellow', 'brown'];

for(let index = 0; index < cores.length; index += 1){
  let cor = cores[index];
  document.createElement('div') 
}



for(let index = 0; index < cores.length; index += 1){
  let cor = document.getElementById(cores[index]);
  cor.style.backgroundColor = cores[index];
  cor.style.width ='60px';
  cor.style.height = '60px';
  cor.style.display = 'inline-block';
}

