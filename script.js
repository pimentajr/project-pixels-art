// transformando os quadrados em cores
const colors = document.querySelectorAll('.color');
const color1 = document.querySelectorAll('.color')[0];
const color2 = document.querySelectorAll('.color')[1];
const color3 = document.querySelectorAll('.color')[2];
const color4 = document.querySelectorAll('.color')[3];
color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'purple';
color3.style.backgroundColor = 'gold';
color4.style.backgroundColor = 'red';

// criando o botão na paleta

document.querySelectorAll('color')[0].className = 'selected';