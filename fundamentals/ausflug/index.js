function getData() {
  return [
    { id: 1, name: 'Lisa' },
    { id: 2, name: 'Klaus' },
    { id: 3, name: 'Petra' },
  ];
}

function renderData() {
  const data = getData();

  data.forEach(({ name }) => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    child.innerText = name;
    parent.appendChild(child);
    document.querySelector('body').appendChild(parent);
  });
}

renderData();
