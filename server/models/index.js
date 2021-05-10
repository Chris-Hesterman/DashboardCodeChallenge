const pool = require('../database/index.js');

const getQuestionsStr = `SELECT * FROM questions`;
const getQuestionsAllStr = `SELECT * FROM questions WHERE page_id = $1`;
const getUserStr = `SELECT * FROM users WHERE user_id = $1`;
const getUsersAllStr = `SELECT * FROM users`;
const updateQuestionStr = `UPDATE questions SET question = $1, answer = $2 WHERE question_id = $3 RETURNING question_id`;
const updateUserStr = `UPDATE users SET username = $1, password = $2 WHERE user_id = $3 RETURNING user_id`;
const addQuestionStr = `INSERT INTO questions (question, answer, page_id) VALUES($1, $2, $3) RETURNING question_id`;
const addUserStr = `INSERT INTO users (username, password) VALUES($1, $2 RETURNING user_id`;
const deleteQuestionStr = `DELETE FROM questions WHERE question_id = $1 RETURNING question_id`;
const deleteUserStr = `DELETE FROM users WHERE user_id = $1 RETURNING user_id`;

const getData = (numberId, type) => {
  let queryString;

  if (type === 'question') {
    queryString = numberId = '[]' ? getQuestionsAllStr : getQuestionsStr;

    return pool
      .query(queryString)
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        throw err;
      });
  } else {
    queryString = numberId = '[]' ? getUsersAllStr : getUserStr;

    return pool
      .query(queryString, [numberId])
      .then((data) => {
        return data.rows;
      })
      .catch((err) => {
        throw err;
      });
  }
};

const updateData = (value1, value2, numberId, type) => {
  let queryString = updateUserStr;

  if (type === 'question') {
    queryString = updateQuestionStr;
  }

  return pool
    .query(queryString, [value1, value2, numberId])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => console.log(err));
};

const addData = (field1, field2, numberId, type) => {
  let queryString = addUserStr;
  let paramsArray = [field1, field2];

  if (type === 'question') {
    queryString = addQuestionStr;
    paramsArray = [field1, field2, numberId];
  }

  return pool
    .query(queryString, paramsArray)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteData = (numberId, type) => {
  let queryString = deleteUserStr;

  if (type === 'question') {
    queryString = deleteQuestionStr;
  }

  return pool.query(queryString, [numberId]);
};

module.exports.getData = getData;
module.exports.addData = addData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
