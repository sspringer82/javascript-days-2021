async function getData() {
  const response = await fetch('http://localhost:3000/people');
  const data = await response.json();
  return data;
}

async function renderData() {
  const data = await getData();

  data.forEach(({ name }) => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    child.innerText = name;
    parent.appendChild(child);
    document.querySelector('body').appendChild(parent);
  });
}

renderData();
