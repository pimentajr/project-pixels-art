function changeClassDiv(event){
let selectDiv = document.getElementsByClassName('selected')[0];
selectDiv.classList.remove('selected')

let newSelectDiv = event.target 
newSelectDiv.classList.add('selected')
}
 
let nextDiv = document.getElementsByClassName('color');
for (let index =0; index < nextDiv.length; index += 1) {
  nextDiv[index].addEventListener('click', changeClassDiv); 
}


