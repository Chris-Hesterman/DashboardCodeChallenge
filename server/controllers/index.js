const pgdb = require('../models');

const controllers = {
  questions: {
    get: (req, res) => {
      const { page_id } = req.params;

      pgdb
        .getData(page_id, 'question')
        .then((results) => {
          results = results.reduce((acc, result) => {
            const page = result.page_id;

            if (acc[page - 1]) {
              acc[page - 1].push(result);
            } else {
              acc[page - 1] = Array(result);
            }
            return acc;
          }, []);

          results = results.filter((pageQuestions) => {
            return Array.isArray(pageQuestions);
          });
          results = results.length === 1 ? results[0] : results;

          res.status(200).send(results);
        })
        .catch((err) => {
          res.status(500).send('Server/database error, please try again');
        });
    },
    put: (req, res) => {
      const { question_id } = req.params;
      const { question, answer } = req.body;

      pgdb
        .updateData(question, answer, question_id, 'question')
        .then((results) => {
          console.log(`question ${results.question_id} was updated`);
          res.status(201).send(`question ${results.question_id} was updated`);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
    post: (req, res) => {
      const { page_id } = req.params;
      const { question, answer } = req.body;

      pgdb
        .addData(question, answer, page_id, 'question')
        .then((result) => {
          const resultString = `question was added to database with question_id ${result[0].question_id}`;
          res.status(201).send(resultString);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    },
    delete: (req, res) => {
      const { question_id } = req.params;

      pgdb
        .deleteData(question_id, 'question')
        .then((result) => {
          res
            .status(200)
            .send(`Deleted question with id of ${result.question_id}`);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send('There was a problem');
        });
    }
  },
  users: {
    get: (req, res) => {
      const { user_id } = req.params;
      pgdb
        .getData(user_id, 'user')
        .then((results) => {
          console.log(results);
          results = results.reduce((acc, result) => {
            const user = result.user_id;
            if (acc[user]) {
              acc[user].push(result);
            } else {
              acc[user] = Array(result);
            }
            return acc;
          }, []);
          if (results.length === 1) {
            results = results[0];
          }
          res.status(200).send(results);
        })
        .catch((err) => {
          res.status(500).send('Server/database error, please try again');
        });
    },
    put: (req, res) => {
      const { user_id } = req.params;
      const { body } = req.body;

      pgdb
        .updateData(body.username, body.password, user_id, 'user')
        .then((results) => {
          console.log(`user ${results.user_id} was updated`);
          res.status(201).send(`user ${results.user_id} was updated`);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
    post: (req, res) => {
      const { body } = req.body;

      pgdb
        .addData(body.username, body.password, 'user')
        .then((result) => {
          res.status(201).send('user was added to database');
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    },
    delete: (req, res) => {
      const { user_id } = req.params;

      pgdb
        .deleteData(user_id, 'user')
        .then((result) => {
          res.status(200).send(`User ${user_id} was deleted`);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send('There was a problem');
        });
    }
  }
};

module.exports = controllers;
