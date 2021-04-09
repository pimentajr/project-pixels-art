//exercicio 7
//o metodo getComputedStyle obtem as propriedades e valores CSS reais do elemento especificado, o estilo calculado é o estilo usado na exibição do elemento;
pixelBoard.addEventListener("click", function(event){
  let selected = document.querySelector(".selected");
  event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
});
