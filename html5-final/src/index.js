import './list.js';
import './form.js';
import './chat.js';
import './payment.js';
import { buyShirt } from './payment.js';
import './fullscreen.js';
import './vibrate.js';

document.addEventListener('DOMContentLoaded', () => {
  history.replaceState({ method: 'list' }, 'list', '/list');

  document.querySelector('pw-list').addEventListener('edit', (e) => {
    edit(e.detail.id);
    history.pushState(
      { method: 'edit', id: e.detail.id },
      'edit',
      `/edit/${e.detail.id}`,
    );
  });

  document.querySelector('pw-form').addEventListener('save', (e) => {
    list();
    history.pushState({ method: 'list' }, 'list', '/list');
  });

  document.getElementById('new').addEventListener('click', () => {
    create();
    history.pushState({ method: 'new' }, 'new', '/new');
  });

  document.querySelector('#buy').addEventListener('click', () => {
    buyShirt();
  });
});

window.onpopstate = (e) => {
  switch (e.state.method) {
    case 'edit':
      edit(e.state.id);
      break;
    case 'new':
      create();
      break;
    case 'list':
    default:
      list();
  }
};

function edit(id) {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');
  pwForm.setAttribute('id', id);
  pwList.style.display = 'none';
  newButton.style.display = 'none';
  pwForm.style.display = 'block';
}

function list() {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');
  pwList.setAttribute('update', Date.now());
  pwList.style.display = 'block';
  newButton.style.display = 'block';
  pwForm.style.display = 'none';
}

function create() {
  const pwList = document.querySelector('pw-list');
  const pwForm = document.querySelector('pw-form');
  const newButton = document.querySelector('#new');
  pwForm.setAttribute('id', '');
  pwList.style.display = 'none';
  newButton.style.display = 'none';
  pwForm.style.display = 'block';
}
