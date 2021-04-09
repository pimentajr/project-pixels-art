let elementH1 = document.createElement('h1');
elementH1.id = 'title';
elementH1.innerHTML = 'Paleta de Cores'
document.body.appendChild(elementH1);

let elementTable = document.createElement('table');
elementTable.id = 'color-palette';
elementH1.appendChild(elementTable);

let tableColor1 = document.createElement('th');
tableColor1.className = 'color';
tableColor1.style.backgroundColor = 'red'
elementTable.appendChild(tableColor1);

let tableColor2 = document.createElement('th');
tableColor2.className = 'color';
tableColor2.style.backgroundColor = 'blue'
elementTable.appendChild(tableColor2);

let tableColor3 = document.createElement('th');
tableColor3.className = 'color';
tableColor3.style.backgroundColor = 'yellow'
elementTable.appendChild(tableColor3);

let tableColor4 = document.createElement('th');
tableColor4.className = 'color';
tableColor4.style.backgroundColor = 'pink'
elementTable.appendChild(tableColor4);

