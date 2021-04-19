document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('blue').style.backgroundColor = 'blue';
document.getElementById('yellow').style.backgroundColor = 'yellow';

const captureClassColor = document.querySelectorAll('.color');
for (index = 0; index < captureClassColor.length; index +=1) {
    let liColor = captureClassColor[index]
    liColor.addEventListener("click", selectCLass);
    function selectCLass (event) {
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected');
            event.target.classList.add('selected');
        }
        
    }

}