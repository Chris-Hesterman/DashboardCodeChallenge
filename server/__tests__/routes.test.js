const request = require('supertest');
const app = require('../index.js');

describe('"/questions/:page_id"', () => {
  it('should respond to GET request for page', () => {
    return request(app)
      .get('/questions/3')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toBeInstanceOf(Object);
        expect(response.body.length).toBeGreaterThan(0);

        expect(response.body[1]).toHaveProperty('question_id');
        expect(typeof response.body[1].question_id).toBe('number');
        expect(response.body[1]).toHaveProperty('question');
        expect(typeof response.body[1].question).toBe('string');
        expect(response.body[1]).toHaveProperty('answer');
        expect(typeof response.body[1].answer).toBe('string');
        expect(response.body[1]).toHaveProperty('page_id');
        expect(typeof response.body[1].page_id).toBe('number');
      });
  });

  it('should responde to GET request for all question data for all pages', () => {
    return request(app)
      .get('/questions/[]')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[1]).toBeInstanceOf(Array);
        console.log(response);
      });
  });
});
