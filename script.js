
let colorsArray = ['rgb(000, 000, 000)', 'rgb(61, 128, 235)', 'rgb(204, 152, 31)', 'rgb(204, 31, 106)']

let sectionBoxColors = document.querySelector('#color-palette');

for (let index = 0; index < colorsArray.length; index += 1) {
    let createBoxColors = document.createElement('div');
    sectionBoxColors.appendChild(createBoxColors);

    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = colorsArray[index];
    document.getElementsByClassName('color')[0].className = 'color selected'

}

let table = document.querySelector('#pixel-board');

function createTable(numberRows, unityNumbers) {
    for (let index = 0; index < numberRows; index += 1) {
        let createLine = document.createElement('tr');
        createLine.className = 'row';
        table.appendChild(createLine);

        for (let index = 0; index < unityNumbers; index += 1) {
            let createUnityPixel = document.createElement('th');
            createUnityPixel.className = 'pixel';
            createUnityPixel.style.backgroundColor = 'rgb(255, 255, 255)';
            createLine.appendChild(createUnityPixel);
        }

    }
}
createTable(5, 5);

/* function startBlackColor() {
    let setTarget = document.querySelector('.pixel');
    setTarget.style.backgroundColor = 'rgb(000, 000, 000)';
    
    let selected = setTarget.style.backgroundColor;
  
    setTarget.addEventListener('click', function() {
        if (selected === 'click');
        selected = setTarget
    });
}; */