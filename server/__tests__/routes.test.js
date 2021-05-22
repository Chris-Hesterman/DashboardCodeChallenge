const request = require('supertest');
const app = require('../index.js');

describe('/questions/:page_id', () => {
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

        expect(response.body[1][1]).toHaveProperty('question_id');
        expect(typeof response.body[1][1].question_id).toBe('number');
        expect(response.body[1][1]).toHaveProperty('question');
        expect(typeof response.body[1][1].question).toBe('string');
        expect(response.body[1][1]).toHaveProperty('answer');
        expect(typeof response.body[1][1].answer).toBe('string');
        expect(response.body[1][1]).toHaveProperty('page_id');
        expect(typeof response.body[1][1].page_id).toBe('number');
        console.log(response.body[1][1]);
      });
  });
});

describe('PUT /questions/post/:question_id', () => {
  const editedFromClient = {
    question: 'eggs updated',
    answer: 'heuvos'
  };

  const originalQuestion = {
    question: 'eggs',
    answer: 'heuvos'
  };

  it('should update question with request data', () => {
    return request(app)
      .put('/questions/7')
      .send(editedFromClient)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe('question 7 was updated');
      });
  });

  it('should result in updated question on next GET request', () => {
    return request(app)
      .get('/questions/2')
      .then((response) => {
        expect(response.body[1].toString()).toBe(editedFromClient.toString());
      });
  });

  it('should undo edit when given original data', () => {
    return request(app)
      .put('/questions/7')
      .send(originalQuestion)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe('question 7 was updated');
      });
  });

  it('should result in original question on next GET request', () => {
    return request(app)
      .get('/questions/2')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[1].toString()).toBe(originalQuestion.toString());
      });
  });
});

describe('POST /questions/page_id', () => {
  const newQuestion = {
    question: 'eggs updated',
    answer: 'heuvos'
  };

  it('should successfully add new question to a given page', () => {
    return request(app)
      .post('/questions/5')
      .send(newQuestion)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(typeof +response.text.split(' ').pop()).toBe('number');
        expect(response.text.split(' ').slice(0, -1).join(' ')).toBe(
          'question was added to database with question_id'
        );
      });
  });
});

describe('DELETE /questions/question_id', () => {
  it('should successfully delete question with given id from database', () => {
    return request(app)
      .delete('/questions/3')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(typeof +response.text.split(' ').pop()).toBe('number');
        expect(response.text.split(' ').slice(0, -1).join(' ')).toBe(
          'Deleted question with id of'
        );
      });
  });
});
