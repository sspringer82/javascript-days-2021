import express from 'express';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import addressRouter from './addresses/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());

const accessLogStream = createWriteStream(join(__dirname, 'access.log'), {
  flags: 'a',
});

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Hallo Client');
  // res.json({ firstname: 'Claudia', lastname: 'Meier' });
});

app.use('/addresses', addressRouter);

const port = 8080;

app.listen(port, () =>
  console.log(`Server listens to http://localhost:${port}`),
);
