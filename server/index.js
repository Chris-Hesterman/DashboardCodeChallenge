const express = require('express');
const path = require('path');
const pgdb = require('./models');
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
  pgdb
    .getTestData()
    .then((results) => {
      res.status(200).send(JSON.stringify(results));
    })
    .catch((err) => {
      res.status(500).send('Server/database error, please try again');
    });
});
app.get('/page/:number', (req, res) => {
  const { number } = req.params;
  pgdb
    .getPageData(number)
    .then((results) => {
      console.log(results);
      results = results.reduce((acc, result) => {
        const page = result.page_id;
        if (acc[page - 1]) {
          acc[page - 1].push(result);
        } else {
          acc[page - 1] = Array(result);
        }
        return acc;
      }, []);
      if (results.length === 1) {
        results = results[0];
      }
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send('Server/database error, please try again');
    });
});

module.exports = app;
