document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    history.pushState('data', 'title', 'url');

    // zeige die Liste an
  });
});

window.onpopstate = (e) => {
  console.log(e);
};
