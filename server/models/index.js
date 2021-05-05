const pool = require('../database/index.js');

const getTestData = () => {
  return pool
    .query(`SELECT * FROM items`)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

module.exports.getTestData = getTestData;
