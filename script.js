const divColors = document.getElementsByClassName('.color');

function setColorToPalette() {
    for (let index = 0; index < divColors.length; index++) {
      const idColorDivs = divColors[index].id;
      if(divColors[index].getElementsByClassName.backgroundColor !== 'black') {
          divColors[0].getElementsByClassName.backgroundColor = 'black';  
        }
        divColors[index].getElementsByClassName.backgroundColor = idColorDivs;        
    }
}
setColorToPalette();
