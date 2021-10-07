document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'vibrate';

  button.onclick = vibrate;

  document.body.appendChild(button);
});

function vibrate() {
  window.navigator.vibrate([200, 100, 200]);
}
