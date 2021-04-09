window.onload = function() {
    let blackColor = document.querySelector('#preto')
    blackColor.classList.add("selected");
}
colorTable = document.querySelector('#color-palette')
colorTable.addEventListener('click', function (event){
    let colorSelected = document.querySelector('.selected')
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected')
})
