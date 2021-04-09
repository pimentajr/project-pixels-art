const getBody = document.body;
const makeTable = document.createElement('table');
getBody.appendChild(makeTable);
makeTable.id = 'pixel-board';
makeTable.className = 'center table';

for (let index = 0; index < 5; index += 1) {
  const makeTr = document.createElement('tr');
  makeTable.appendChild(makeTr);
  makeTr.className = 'center';
  for (let jndex = 0; jndex < 5; jndex += 1) {
    const makeTd = document.createElement('td');
    makeTr.appendChild(makeTd);
    makeTd.className = 'pixel branco';
  }
}
// npm run lint
// npm run lint:styles
