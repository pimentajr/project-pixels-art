let getcolorPalette = document.getElementById('color-palette');
let getColors = document.querySelectorAll('.color')

getcolorPalette.addEventListener('click', function (event) {
    getColors.forEach((elem) => {
        if(elem.classList !== undefined) {
            elem.classList.remove('selected')
        }
    })
    event.target.classList.add('selected');
});