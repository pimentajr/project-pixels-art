document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('blue').style.backgroundColor = 'blue';
document.getElementById('yellow').style.backgroundColor = 'yellow';

const captureClassColor= document.querySelectorAll('.color');
for (index= 0; index < captureClassColor.lenght; index += 1) {
    let liColor = captureClassColor[index]
    liColor.addEventListener('click', selectedClass);
    function selectedClass (event) {
        if (event.target.classList.contains ('selected')) {
            event.target.classList.remove('selected');
            event.target.classList.add('selected');
        }
    }
} 
