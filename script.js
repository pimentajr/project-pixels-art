

let palselected = document.getElementById('color-palette');
let pixelboard = document.getElementById('pixel-board');
let clean = document.getElementById('clean');
let pixels = document.getElementsByClassName('pixel')
let backcolor = document.getElementsByClassName('selected')


document.getElementById("cube1").className = "selected";





palselected.addEventListener('click',function(event){
   let colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    colorSelected.classList.add('color');
    event.target.classList.remove('color');
    event.target.classList.add('selected');
}
) 

    






pixelboard.addEventListener('click',function(event) {
    let selectedpixel = event.target
selectedpixel.style.backgroundColor = window.getComputedStyle(backcolor[0], null).getPropertyValue("background-color");
// peguei essa do https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element
})

clean.addEventListener('click', function() {
for (let index = 0; index < pixels.length; index++) {
   pixels[index].style.backgroundColor = 'white'
    
}
        
    }
)



