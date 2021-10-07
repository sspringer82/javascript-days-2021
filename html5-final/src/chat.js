document.addEventListener('DOMContentLoaded', () => {
  const messages = document.getElementById('messages');
  const chatMessage = document.getElementById('chatMessage');
  const chatSend = document.getElementById('chatSend');

  const ws = new WebSocket(`ws://localhost:8080`);

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    const div = document.createElement('div');
    div.innerText = data.message;
    messages.appendChild(div);
  };
  chatSend.addEventListener('click', () => {
    const value = chatMessage.value;
    ws.send(JSON.stringify({ message: value }));
  });
});
