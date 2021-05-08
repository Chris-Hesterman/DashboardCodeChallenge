const pool = require('../database/index.js');

const getPageData = (number) => {
  const queryString =
    number === '[]'
      ? `SELECT * FROM questions;`
      : `SELECT * FROM questions WHERE page_id = ` + number;

  return pool
    .query(queryString)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

module.exports.getPageData = getPageData;
