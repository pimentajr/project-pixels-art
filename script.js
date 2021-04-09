let sectionBoxColors = document.querySelector('#color-palette');

for (let index = 0; index < 4; index += 1) {
    let createBoxColors = document.createElement('div');
    sectionBoxColors.appendChild(createBoxColors);

    let boxColorDiv = createBoxColors;
    boxColorDiv.className = 'color'
    boxColorDiv.id = "box-color" + index

}
console.log(sectionBoxColors);

let box0 = document.querySelector('#box-color0').style.backgroundColor = 'rgb(000, 000, 000)';
let box1 = document.querySelector('#box-color1').style.backgroundColor = 'rgb(61, 128, 235)';
let box2 = document.querySelector('#box-color2').style.backgroundColor = 'rgb(204, 152, 31)';
let box3 = document.querySelector('#box-color3').style.backgroundColor = 'rgb(204, 31, 106)';