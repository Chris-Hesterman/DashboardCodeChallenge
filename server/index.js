const express = require('express');
const path = require('path');
// const router = require('./routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(router);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/test', (req, res) => {
  res.status(200).send('You got it');
});

module.exports = app;
