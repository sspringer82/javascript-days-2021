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
  doSomethingWithNodes();
}

renderData();

function doSomethingWithNodes() {
  const spanNodes = document.querySelectorAll('span');
  console.log(spanNodes);
  spanNodes[0].style.backgroundColor = 'red';
  spanNodes[1].style.backgroundColor = 'blue';
  spanNodes[2].style.backgroundColor = 'hotpink';
}
