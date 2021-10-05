import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Hallo Client');
  // res.json({ firstname: 'Claudia', lastname: 'Meier' });
});

const port = 8080;

app.listen(port, () =>
  console.log(`Server listens to http://localhost:${port}`),
);
