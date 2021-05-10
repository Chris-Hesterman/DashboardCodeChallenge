const express = require('express');
const path = require('path');
// const pgdb = require('./models');
const router = require('./routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(router);
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

// app.get('/questions/:page_id', (req, res) => {
//   const { page_id } = req.params;
//   pgdb
//     .getPageData(page_id)
//     .then((results) => {
//       console.log(results);
//       results = results.reduce((acc, result) => {
//         const page = result.page_id;
//         if (acc[page - 1]) {
//           acc[page - 1].push(result);
//         } else {
//           acc[page - 1] = Array(result);
//         }
//         return acc;
//       }, []);
//       if (results.length === 1) {
//         results = results[0];
//       }
//       res.set('Access-Control-Allow-Origin', '*');
//       res.status(200).send(results);
//     })
//     .catch((err) => {
//       res.status(500).send('Server/database error, please try again');
//     });
// });

// app.put('/question/:question_id', (req, res) => {
//   const { question_id } = req.params;
//   res.send(question_id);
// });

// app.post('/question', (req, res) => {
//   res.send('ok');
// });

// app.delete('/question/:question_id', (req, res) => {
//   const question_id = req.params.questionId;
//   res.send(question_id);
// });

module.exports = app;
