import dataset from '../data.js';

const LeaderBoard = () => {
  const boardSection = document.createElement('div');
  boardSection.classList.add('board-sec');

  const table = document.createElement('table');
  table.classList.add('table');

  table.innerHTML = `
  <thead class="thead">
    <tr class="thead-row">
      <th scope="col" class="th-row player-header">Player</th>
      <th scope="col" class="th-row">Score</th>
    </tr>
  </thead>`;

  const tbody = document.createElement('tbody');

  dataset.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'tbody-row';

    const th = document.createElement('th');
    th.scope = 'row';
    th.className = 'th-row';
    th.textContent = data.name;

    const td = document.createElement('td');
    td.className = 'td-row';
    td.textContent = data.score;

    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  boardSection.appendChild(table);

  return boardSection;
};

export default LeaderBoard;
