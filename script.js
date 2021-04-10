

let palselected = document.getElementById('color-palette');
let pixelboard = document.getElementById('pixel-board');
let color = 'black'

palselected.addEventListener('click',function(event){
    let selectedcolor = event.target.id
if (selectedcolor == 'cube1') {
    color = 'black'
}
if (selectedcolor == 'cube2') {
    color = 'green'
}
if (selectedcolor =='cube3') {
    color = 'blue'
}
if (selectedcolor =='cube4') {
    color = 'red'
}
return color
}
)

let colorselected = document.querySelector('.selected')
console.log(colorselected)

pixelboard.addEventListener('click',function(event) {
    let selectedpixel = event.target
selectedpixel.style.backgroundColor = color

})




