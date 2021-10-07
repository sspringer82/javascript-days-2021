let data = [
  {
    id: 1,
    username: 'test',
    password: 'p@55w0rD',
    url: 'https://google.com',
    notes: "Don't give your password away",
  },
  {
    id: 2,
    username: 'test1',
    password: 'p@55w0rD',
    url: 'https://live.com',
    notes: "Don't give your password away",
  },
];

document.addEventListener('DOMContentLoaded', () => {
  buildTable();

  document.getElementById('new').addEventListener('click', createEntry);
  document.getElementById('form').addEventListener('submit', save);
  document.getElementById('cancel').addEventListener('click', cancel);
});

function buildTable() {
  const tableContainer = document.getElementById('list');
  tableContainer.innerHTML = '';

  const table = document.createElement('table');
  data.forEach((rowData) => createRow(rowData, table));
  tableContainer.appendChild(table);

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      deleteEntry(e.target.dataset.id);
    } else if (e.target.classList.contains('edit')) {
      editEntry(
        data.find((entry) => entry.id === parseInt(e.target.dataset.id, 10)),
      );
    }
  });
}

function createRow(data, table) {
  const tr = document.createElement('tr');

  // url
  const urlTd = document.createElement('td');
  urlTd.innerText = data.url;
  tr.appendChild(urlTd);

  // username
  const usernameTd = document.createElement('td');
  usernameTd.innerText = data.username;
  tr.appendChild(usernameTd);

  // password
  const passwordTd = document.createElement('td');
  passwordTd.innerText = '*'.repeat(data.password.length);
  tr.appendChild(passwordTd);

  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.dataset.id = data.id;
  deleteButton.innerText = 'delete';
  tr.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.classList.add('edit');
  editButton.dataset.id = data.id;
  editButton.innerText = 'edit';
  tr.appendChild(editButton);

  table.appendChild(tr);
}

function deleteEntry(id) {
  const tableContainer = document.getElementById('list');
  data = data.filter((row) => row.id !== parseInt(id, 10));
  buildTable(data, tableContainer);
}

function editEntry(data) {
  showAndResetForm();

  for (const [key, value] of Object.entries(data)) {
    console.log(key);
    document.getElementById(key).value = value;
  }
}

function createEntry() {
  showAndResetForm();
}

function showAndResetForm() {
  document.getElementById('list').style.display = 'none';
  document.getElementById('new').style.display = 'none';

  const form = document.getElementById('form');
  form.style.display = 'block';
  form.reset();
}

function showAndRefreshTable() {
  const tableContainer = document.getElementById('list');
  buildTable(data, tableContainer);
  tableContainer.style.display = 'block';
  document.getElementById('new').style.display = 'block';
  document.getElementById('form').style.display = 'none';
}

function cancel() {
  showAndRefreshTable();
}

function save(e) {
  e.preventDefault();

  const entry = {
    id: parseInt(document.getElementById('id').value, 10),
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    url: document.getElementById('url').value,
    notes: document.getElementById('notes').value,
  };

  if (entry.id) {
    const id = data.findIndex((e) => e.id === entry.id);
    data[id] = entry;
  } else {
    entry.id = Math.max(...data.map((e) => e.id)) + 1;
    data.push(entry);
  }

  showAndRefreshTable();
}
