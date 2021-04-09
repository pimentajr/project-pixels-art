let sectionBoxColors = document.querySelector('#color-palette');

for (let index = 0; index < 4; index += 1) {
    let createBoxColors = document.createElement('div');
    sectionBoxColors.appendChild(createBoxColors);

    let boxColorDiv = createBoxColors;
    boxColorDiv.className = 'color'
    boxColorDiv.id = "box-color" + index

}
console.log(sectionBoxColors);

document.querySelector('#box-color0').style.backgroundColor = 'rgb(34, 201, 132)';
document.querySelector('#box-color1').style.backgroundColor = 'rgb(61, 128, 235)';
document.querySelector('#box-color2').style.backgroundColor = 'rgb(204, 152, 31)';
document.querySelector('#box-color3').style.backgroundColor = 'rgb(204, 31, 106)';