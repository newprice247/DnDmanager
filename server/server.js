require('dotenv').config();

const express = require('express');

const db = require('./config/connection');

const PORT = 5000 || process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require('./routes');

app.use('/', router);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT} !`);
  });
});

