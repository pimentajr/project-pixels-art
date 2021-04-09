window.onload = function() {
  let select = document.querySelector('.color')
  select.className = 'color selected'
}


function colorPallete(){
  let allPallete = document.querySelectorAll('.color')
  for (let c = 0; c < allPallete.length; c += 1){
      allPallete[c].className = 'color';
    }
}

function selectColor(slColor){
  let color = document.getElementById(slColor)
  colorPallete()
  color.className = 'color selected'
}
