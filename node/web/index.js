import { createServer } from 'http';

const server = createServer((req, res) => {
  debugger;
  if (req.method === 'GET' && req.url === '/') {
    res.end('Hallo Welt');
  }}else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const port = 8080;
server.listen(port, () =>
  console.log(`Server listens to http://localhost:${port}`),
);
