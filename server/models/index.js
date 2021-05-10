const pool = require('../database/index.js');

const getPageData = (page_id) => {
  if ((page_id = '[]')) {
    return pool
      .query(`SELECT * FROM questions`)
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        throw err;
      });
  } else {
    return pool
      .query(`SELECT * FROM questions WHERE page_id = $1`, [page_id])
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        throw err;
      });
  }
};

const updateQuestion = (question, answer, question_id) => {
  const queryString = `UPDATE questions SET question = $1, answer = $2 answer WHERE question_id = $3 RETURNING question_id`;

  return pool
    .query(queryString, [question, answer, question_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => console.log(err));
};

const addQuestion = (question, answer, page_id) => {
  const queryString = `INSERT INTO questions (question, answer, page_id) VALUES($1, $2, $3) RETURNING question_id`;

  return pool
    .query(queryString, [question, answer, page_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteQuestion = (question_id) => {
  const queryString = `DELETE FROM questions WHERE question_id = $1 RETURNING question_id`;
  return pool.query();
};

module.exports.getPageData = getPageData;
module.exports.addQuestion = addQuestion;
module.exports.updateQuestion = updateQuestion;
module.exports.deleteQuestion = deleteQuestion;
