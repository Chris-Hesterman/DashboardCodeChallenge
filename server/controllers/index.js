const path = require('path');
const pgdb = require('../models');

const controllers = {
  root: {
    get: (req, res) => {
      res.sendFile(path.join(__dirname, '../build', 'index.html'));
    }
  },
  questions: {
    get: (req, res) => {
      const { page_id } = req.params;
      pgdb
        .getPageData(page_id)
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
    },
    put: (req, res) => {
      const { question_id } = req.params;
      const { body } = req.body;

      pgdb
        .updateQuestion(body.question, body.answer, question_id)
        .then((results) => {
          console.log(`question ${results.question_id} was updated`);
          res.set('Access-Control-Allow-Origin', '*');
          res.status(200).send(`question ${results.question_id} was updated`);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
    post: (req, res) => {
      const { page_id } = req.params;
      const { body } = req.body;

      pgdb
        .addQuestion(question, answer, page_id)
        .then((result) => {
          res.set('Access-Control-Allow-Origin', '*');
          res.status(202).send('question was added to database');
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    },
    delete: (req, res) => {
      const { question_id } = req.params;

      pgdb
        .deleteQuestion(question_id)
        .then((result) => {
          res.set('Access-Control-Allow-Origin', '*');
          res.status(200).send(`Question ${question_id} was deleted`);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send('There was a problem');
        });
    }
  }
};

module.exports = controllers;
