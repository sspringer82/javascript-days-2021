document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'toggle fullscreen';

  button.onclick = vibrate;

  document.body.appendChild(button);
});

function vibrate() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
