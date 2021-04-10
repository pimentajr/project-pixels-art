let palselected = document.getElementById('color-palette');

pixelboard.addEventListener('click',function(event) {
    let pixelboard = document.getElementById('pixel-board')
 
})

palselected.addEventListener('click',function(event){
    let selectedcolor = event.target.id
    document.getElementById('cube1').classList.remove('selected');
    document.getElementById('cube2').classList.remove('selected');
    document.getElementById('cube3').classList.remove('selected');
    document.getElementById('cube4').classList.remove('selected');
    document.getElementById(selectedcolor).classList.add('selected'); 

}

)



