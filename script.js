window.onload = createPixels

let frame = document.querySelector('#pixel-board');
function createPixels() {
    for (let index = 0; index < 5; index += 1) {
        let box = document.createElement('div');
        frame.appendChild(box);
        for (let index = 0; index < 5; index += 1) {
            let box = document.createElement('div');
            box.classList.add('pixel');
            frame.appendChild(box);
            box.style.backgroundColor = 'white';
            box.style.display = 'inline-block';
        }
    }
}