window.onload = start;

function start (){
    let linhas = document.getElementsByClassName('pixel');
    for (let i = 0; i <= linhas.length; i += 1)
    linhas[i].style.backgroundColor = "white" ;
}
