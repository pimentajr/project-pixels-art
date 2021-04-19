document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('blue').style.backgroundColor = 'blue';
document.getElementById('yellow').style.backgroundColor = 'yellow';

function colorSelection () {

    let selectedBefore = document.getElementsByClassName('selected');
    let colorPalette = document.querySelectorAll('.color');

    for (let index = 0; index < colorPalette.length; index += 1) {
        colorPalette[index].addEventListener('click', function() {
            colorPalette[index].classList.add = 'selected';
            selectedBefore.className = 'color';
        });
        }
        let select = document.getElementsByClassName('selected');
        return select
    }